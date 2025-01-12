import express from "express"
import { uploadImage } from "../conrollers/blogcontroller.js"
import { upload } from "../middleware/multer.middleware.js"

const router = express.Router()

router.post("/uploadimage", upload.single("image") , uploadImage)

export default router