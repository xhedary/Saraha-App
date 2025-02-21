import messageModel from "../../../DB/model/message.model.js"
import userModel from "../../../DB/model/user.model.js"
import { asyncHandler } from "../../../utils/error/error.js"

export const sendMessage = asyncHandler(
    async (req, res, next) => {
        const { recipientId, message } = req.body
        if (!await userModel.findOne({ _id: recipientId, isDeleted: false })) {
            return next(new Error("In-valid Account Id", { cause: 404 }))
        }
        const newMessage = await messageModel.create({ recipientId, message })
        return res.status(200).json({ message: "Done", newMessage })
    }
)