import { Router } from "express";
import { sendMessage } from "./services/message.service.js";
const router = Router()
router.post('/', sendMessage)
export default router