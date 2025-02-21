import joi from "joi"
import { generalFields } from "../../middleware/validation.meddleware.js"

export const updateProfile = {
    body: joi.object().keys({
        username: generalFields.username,
        DOB: generalFields.DOB,
        gender: generalFields.gender,
        address: generalFields.address,
    })
}

export const shareProfile = {
    params: joi.object().keys({
        userId: generalFields.id.required()
    })
}


export const updatePassword = {
    body: joi.object().keys({
        oldPassword: generalFields.password.required(),
        password: generalFields.password.not(joi.ref("oldPassword")).required(),
        confirmationPassword: generalFields.confirmationPassword.valid(joi.ref("password")).required(),
    })
}

export const reactivateAccount = {
    body: joi.object().keys({
        email: generalFields.email.required()
    })
}

