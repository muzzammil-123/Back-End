import { Router } from "express";
import { userLogin, userLogout, userRegister, userUpdate } from "../controller/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = Router();

router.post("/register", userRegister)
router.post("/login", userLogin)
router.post("/logout", userLogout)
router.put("/update", authMiddleware, userUpdate)


export default router;