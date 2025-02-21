import jwt from "jsonwebtoken"

export const generateToken = ({payload = {}, signature = process.env.TOKEN_SIGNATURE, option = {}} = {}) => {
    const token = jwt.sign(payload, signature, option)
    return token
}

export const verifyToken = ({token = "", signature = process.env.TOKEN_SIGNATURE, option = {}} = {}) => {
    const decoded = jwt.verify(token, signature)
    return decoded
}
