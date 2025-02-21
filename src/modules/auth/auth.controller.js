import { Router } from "express";
import * as registrationService from "./services/registration.service.js";
import loginService from "./services/login.service.js";
const router = Router()

import { validation } from "../../middleware/validation.meddleware.js";
import * as validators from "./auth.validation.js";

router.post('/signup', validation(validators.signup), registrationService.signup)
router.post('/signup-otp', validation(validators.signup), registrationService.signupOtp)
router.patch('/confirm-email', validation(validators.confirmEmail), registrationService.confirmEmail)
router.patch('/confirm-email-otp',validation(validators.confirmEmailOtp), registrationService.confirmEmailOtp)
router.post('/login', validation(validators.login), loginService.login)

export default router