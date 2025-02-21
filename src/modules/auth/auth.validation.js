import joi from "joi"
import { generalFields } from "../../middleware/validation.meddleware.js"

export const signup = {
    body : joi.object().keys({
        username: generalFields.username.required(),
        email: generalFields.email.required(),
        password: generalFields.password.required(),
        confirmationPassword: generalFields.confirmationPassword.valid(joi.ref("password")),
        phone: generalFields.phone.required()
    }).required(),
}

export const login = {
    body : joi.object().keys({
        email: generalFields.email.required(),
        password: generalFields.password.required()
    })
}

export const confirmEmail = {
    headers : joi.object().keys({
        authorization : joi.string().required()
    }).options({allowUnknown : true})
}

export const confirmEmailOtp = {
    body : joi.object().keys({
        email: generalFields.email.required(),
        otp : joi.string().length(6).required()
    })
}


