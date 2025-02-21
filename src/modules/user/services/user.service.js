import { customAlphabet } from "nanoid"
import messageModel from "../../../DB/model/message.model.js"
import userModel from "../../../DB/model/user.model.js"
import { asyncHandler } from "../../../utils/error/error.js"
import { successResponse } from "../../../utils/response/success.response.js"
import { generateDecryption } from "../../../utils/security/encryption.js"
import { compareHash, generateHash } from "../../../utils/security/hash.js"
import { emailEvent } from "../../../utils/events/email.event.js"

export const profile = asyncHandler(
    async (req, res, next) => {
        req.user.phone = generateDecryption({ cipherText: req.user.phone })
        const messages = await messageModel.find({ recipientId: req.user._id })
        return successResponse({ res, message: "Done", data: { user: req.user, messages } })
    }
)

export const shareProfile = asyncHandler(
    async (req, res, next) => {
        const user = await userModel.findOne({ _id: req.params.userId, isDeleted: false }).select("username DOB gender")
        return user ? successResponse({ res, message: "Done", data: { user } }) : next(new Error("In-valid User Id", { cause: 400 }))
    }
)


export const updateProfile = asyncHandler(
    async (req, res, next) => {
        const user = await userModel.findByIdAndUpdate(req.user.id, req.body, { new: true, runValidators: true })
        return successResponse({ res, message: "Done", data: { user: user } })
    }
)

export const updatePassword = asyncHandler(
    async (req, res, next) => {
        const { oldPassword, password } = req.body
        if (!compareHash({ plainText: oldPassword, hashValue: req.user.password })) {
            return next(new Error("In-valid old password", { cause: 400 }))
        }
        const hashPassword = generateHash({ plainText: password })
        const user = await userModel.findByIdAndUpdate(req.user.id, { password: hashPassword, passwordTimeChange: Date.now() }, { new: true, runValidators: true })
        return successResponse({ res, message: "Password changed", data: { user: user } })
    }
)

export const freezeProfile = asyncHandler(
    async (req, res, next) => {
        const user = await userModel.findByIdAndUpdate(req.user.id, { isDeleted: true, passwordTimeChange: Date.now() }, { new: true, runValidators: true })
        return successResponse({ res, message: "Account Freezed", data: { user: user } })
    }
)

export const reactivateAccount = asyncHandler(
    async (req, res, next) => {
        const user = await userModel.findOne({email : req.body.email})
        if(!user.isDeleted) {
            return next(new Error("Your account allready is active", {cause : 409}))
        }
        const nanoid = customAlphabet('0123456789', 6)
        const otp = nanoid()
        emailEvent.emit("sendConfirmEmailReactivateOtp", { email : req.body.email , otp })
        user.confirmEmailOtp = generateHash({ plainText: otp })
        await user.save()
        return successResponse({res, message : "Please confirm your email to reactivate your account", status : 200 })
    }
)