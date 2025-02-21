import userModel from "../../../DB/model/user.model.js"
import { emailEvent } from "../../../utils/events/email.event.js"
import { asyncHandler } from "../../../utils/error/error.js"
import { successResponse } from "../../../utils/response/success.response.js"
import { compareHash, generateHash } from "../../../utils/security/hash.js"
import { generateEncryption } from "../../../utils/security/encryption.js"
import { verifyToken } from "../../../utils/security/token.js"
import { customAlphabet } from "nanoid"



export const signup = asyncHandler(
    async (req, res, next) => {
        const { username, email, password, phone } = req.body
        if (await userModel.findOne({ email })) {
            return next(new Error("Email already exists", { cause: 409 }))
        }
        const hashPassword = generateHash({ plainText: password })
        const encryptPhone = generateEncryption({ plainText: phone })
        await userModel.create({ username, email, password: hashPassword, phone: encryptPhone })
        emailEvent.emit("sendConfirmEmail", { email })
        return successResponse({ res, message: "User added successfully confirm your email!", status: 201 })
    })

export const signupOtp = asyncHandler(
    async (req, res, next) => {
        const { username, email, password, phone } = req.body
        if (await userModel.findOne({ email })) {
            return next(new Error("Email already exists", { cause: 409 }))
        }
        const hashPassword = generateHash({ plainText: password })
        const encryptPhone = generateEncryption({ plainText: phone })
        const nanoid = customAlphabet('0123456789', 6)
        const otp = nanoid()
        await userModel.create({ username, email, password: hashPassword, phone: encryptPhone, confirmEmailOtp: generateHash({ plainText: otp }) })
        emailEvent.emit("sendConfirmEmailOtp", { email, otp })
        return successResponse({ res, message: "User added successfully confirm your email!", status: 201 })
    })

export const confirmEmail = asyncHandler(
    async (req, res, next) => {
        const { authorization } = req.headers
        const decoded = verifyToken({ token: authorization, signature: process.env.EMAIL_TOKEN_SIGNATURE })
        const user = await userModel.findOneAndUpdate({ email: decoded.email }, { confirmEmail: true }, { new: true })
        return successResponse({ res, message: "Email confimed!", data: { user }, status: 200 })
    }
)

export const confirmEmailOtp = asyncHandler(
    async (req, res, next) => {
        const user = await userModel.findOne(req.body.email)
        if (!compareHash({ plainText: req.body.otp, hashValue: user.confirmEmailOtp })) {
            return next(new Error("In-valid OTP", { cause: 400 }))
        }
        user.confirmEmail = true
        user.isDeleted = false
        user.confirmEmailOtp = null
        await user.save()
        return successResponse({ res, message: "Email confimed!", data: { user }, status: 200 })
    }
)

