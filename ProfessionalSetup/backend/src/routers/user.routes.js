import { Router } from 'express';
import userRegister from '../controller/user.controller.js';
import upload from '../middleware/multer.middleware.js';
import userLogin from '../controller/user.login.js';
import logOut from '../controller/user.login.js';
import verifyJWTToken from '../middleware/auth.middleware.js';
import refreshAccessToken from '../controller/refreshAccessToken.js';
const router = Router();

router.route('/register').post(
  // upload.fields([
  //   { name: 'profileImage', maxCount: 1 },
  //   { name: 'coverImage', maxCount: 1 },
  // ]),
  userRegister
);

router.route('/login').post(userLogin);

router.route('/logout').post(verifyJWTToken, logOut);
router.route('/refresh').post(refreshAccessToken);
export default router;
