import mongoose, {model, Schema, Types} from "mongoose";
const messageSchema = new Schema({
    recipientId: {
        type : Types.ObjectId,
        required : true,
        ref : "User"
    },
    message : {
        type : String,
        required : true
    }
})

const messageModel = mongoose.models.Message || model("Message", messageSchema)
export default messageModel