import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { shouldBeLoggedIn } from "../controller/shouldBeLoggedIn.js";
const router = Router();

router.get('/should-be-login', authMiddleware, shouldBeLoggedIn)

export default router;