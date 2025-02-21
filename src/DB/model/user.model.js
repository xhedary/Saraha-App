import mongoose, { Schema, model } from "mongoose";
import { userRoles } from "../../middleware/authentication.meddleware.js";

const userSchema = mongoose.models.User || new Schema({
    username: {
        type: String,
        minlength: 2,
        maxlength: 25,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    confirmEmailOtp : {
        type : String,
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        default: 'male'
    },
    DOB: Date,
    address: String,
    phone: String,
    image: String,
    confirmEmail: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: Object.values(userRoles),
        default: userRoles.user
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    passwordTimeChange: Date
}, { timestamps: true })

const userModel = model("User", userSchema)
export default userModel
