import { userRoles } from "../../middleware/authentication.meddleware.js";

export const endpoint = {
    profile: [userRoles.user],
    updatePassword : [userRoles.user, userRoles.admin]
}