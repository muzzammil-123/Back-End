import { Router } from "express";
import { userLogin, userLogout, userRegister } from "../controller/userController.js";
const router = Router();

router.post("/register", userRegister)
router.post("/login", userLogin)
router.post("/logout", userLogout)


export default router;