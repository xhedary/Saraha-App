import DBconnection from "./DB/connection.js"
import authController from "./modules/auth/auth.controller.js"
import userController from "./modules/user/user.controller.js"
import messageController from "./modules/message/message.cotroller.js"
import { globalErrorHandling } from "./utils/error/error.js"
import cors from "cors"
const bootstrap = (app, express) => {
    app.use(cors())
    app.use(express.json())
    app.get('/', (req, res, next) => {
        return res.json({ message: "Hello World!" })
    })
    app.use('/auth', authController)
    app.use('/user', userController)
    app.use('/message', messageController)
    app.use('*', (req, res, next) => {
        return res.status(404).json({ message: "In-vaild Routing" })
    })
    DBconnection()
    app.use(globalErrorHandling)
}

export default bootstrap