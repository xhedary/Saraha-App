import joi from "joi"
import { Types } from "mongoose"

export const validationObjectId = (value, helper) => {
    return Types.ObjectId.isValid(value) 
    ? true : helper.message("In-valid Object Id")
}
export const generalFields = {
    username: joi.string().alphanum().min(3).max(25).case("lower"),
    email: joi.string().email(),
    password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)),
    confirmationPassword: joi.string().valid(joi.ref("password")),
    phone: joi.string().pattern(new RegExp(/^(002|\+2)?01[0125][0-9]{8}$/)),
    DOB : joi.date().less("now"),
    address : joi.string(),
    gender : joi.string().valid("male" | "female"),
    id : joi.string().custom(validationObjectId),
    message : joi.string().max(1000)
}



export const validation = (schema) => {
    return (req, res, next) => {
        const validationErrors = []

        for (const key of Object.keys(schema)) {
            const validationResult = schema[key].validate(req[key], { abortEarly: false })
            if (validationResult.error) {
                validationErrors.push({ key, err: validationResult.error.details })
            }
        }
        if (validationErrors.length > 0) {
            return res.status(400).json({ message: "Validation Error", validationErrors: validationErrors })
        }
        return next()
    }
}