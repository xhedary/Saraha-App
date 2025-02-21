import userModel from "../DB/model/user.model.js";
import { asyncHandler } from "../utils/error/error.js";
import { verifyToken } from "../utils/security/token.js";

export const userRoles = {
    admin: "Admin",
    user: "User"
}

export const authentication = () => {
    return asyncHandler(async (req, res, next) => {
        const { authorization } = req.headers
        const [bearer, token] = authorization?.split(" ") || []
        if (!bearer || !token) {
            return next(new Error("In-valid token components", { cause: 401 }))
        }
        let signature = undefined
        switch (bearer) {
            case "Admin":
                signature = process.env.TOKEN_SIGNATURE_ADMIN
                break;
            case "User":
                signature = process.env.TOKEN_SIGNATURE
                break;
            default:
                break;
        }
        const decoded = verifyToken({ token, signature })
        if (!decoded?.userId) {
            return next(new Error("In-valid token payload", { cause: 400 }))
        }
        const user = await userModel.findById(decoded.userId)
        if (!user) {
            return next(new Error("Not register account", { cause: 404 }))
        }
        
        if(user.passwordTimeChange?.getTime() >= decoded.iat*1000) {
            return next(new Error("In-valid credentials", { cause: 400 }))
        }
        
        req.user = user
        return next()
    })
}

export const authorization = (accessRoles = []) => {
    return asyncHandler(async (req, res, next) => {
        if (!accessRoles.includes(req.user.role)) {
            return next(new Error("Un authorized account", { cause: 403 }))
        }
        return next()
    })
}

