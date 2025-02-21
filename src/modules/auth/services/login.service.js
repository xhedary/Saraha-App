import userModel from "../../../DB/model/user.model.js"
import { userRoles } from "../../../middleware/authentication.meddleware.js"
import { asyncHandler } from "../../../utils/error/error.js"
import { successResponse } from "../../../utils/response/success.response.js"
import { compareHash } from "../../../utils/security/hash.js"
import { generateToken } from "../../../utils/security/token.js"

const login = asyncHandler(
    async (req, res, next) => {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            return next(new Error("In-valid email or password", { cause: 404 }))
        }

        if (!compareHash({ plainText: password, hashValue: user.password })) {
            return next(new Error("In-valid email or password", { cause: 404 }))
        }

        if (!user.confirmEmail && !user.isDeleted) {
            return next(new Error("Please confirm your email first", { cause: 404 }))
        }

        if (user.isDeleted) {
            return next(new Error("Account is freeze", { cause: 403 }))
        }

        const token = generateToken({
            payload: { userId: user._id, isLogged: true },
            signature: user.role == userRoles.admin ? process.env.TOKEN_SIGNATURE_ADMIN : process.env.TOKEN_SIGNATURE,
            option: { expiresIn: "1h" }
        })
        return successResponse({ res, message: "Login successfully", data: { token }, status: 200 })
    }
)

export default { login }