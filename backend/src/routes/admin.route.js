import { Router } from "express"
import { createSong } from "../controller/admin.controller.js"
import { portectRoute, requireAdmin } from "../middleware/auth.middleware.js"

const router = Router()

router.post("/songs", portectRoute, requireAdmin, createSong)

export default router
