// In urlRoutes.js

import { Router } from "express";
import { urlShortner, redirectUrl } from "../controller/urlController.js";
const router = Router();

router.post('/shortUrl', urlShortner)
router.get('/:shortUrl', redirectUrl)

export default router;
