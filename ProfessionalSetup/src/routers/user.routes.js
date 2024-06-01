import { Router } from 'express'
import userRegister from '../controller/user.controller.js'
import upload from '../middleware/multer.middleware.js'
const router = Router()
router.route('/register', upload.fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'coverImage', maxCount: 1 }
]), userRegister
)
export default router