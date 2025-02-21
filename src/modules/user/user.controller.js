import { Router } from "express";
import { authentication, authorization } from "../../middleware/authentication.meddleware.js";
import * as userServices from "./services/user.service.js";
import { endpoint } from "./user.endpoint.js";
import { validation } from "../../middleware/validation.meddleware.js";
import * as validators from "./user.validation.js"
const router = Router()

router.get("/profile",
    authentication(),
    authorization(endpoint.profile),
    userServices.profile
)

router.get("/profile/:userId",
    validation(validators.shareProfile),
    userServices.shareProfile
)
router.patch("/update-profile",
    authentication(),
    authorization(endpoint.profile),
    validation(validators.updateProfile),
    userServices.updateProfile
)
router.patch("/profile/update-password",
    authentication(),
    authorization(endpoint.profile),
    validation(validators.updatePassword),
    userServices.updatePassword
)
router.delete("/profile/freeze-profile",
    authentication(),
    authorization(endpoint.profile),
    userServices.freezeProfile
)
router.patch("/reactivate-account",
    validation(validators.reactivateAccount),
    userServices.reactivateAccount
)

export default router