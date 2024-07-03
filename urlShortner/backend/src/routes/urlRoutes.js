import { Router } from "express";
import { urlShortner } from "../controller/urlController.js";
const router = Router();

router.post('/shortUrl', urlShortner)

export default router;