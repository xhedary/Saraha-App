import joi from "joi";
import { generalFields } from "../../../middleware/validation.meddleware.js";

export const message = {
    body : joi.object().keys({
        recipientId : generalFields.id.required(),
        message : generalFields.message.required()
    })
}

export const updateProfile = {
    body : joi.object().keys({
        username : generalFields.username,
        DOB : generalFields.DOB,
        gender : generalFields.gender,
        address : generalFields.address,
    })
}