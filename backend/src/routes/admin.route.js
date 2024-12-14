import { Router } from "express"
import { getAdmin } from "../controller/admin.controller.js"
import { portectRoute, requireAdmin } from "../middleware/auth.middleware.js"

const router = Router()

router.get("/", portectRoute, requireAdmin, getAdmin)

export default router
