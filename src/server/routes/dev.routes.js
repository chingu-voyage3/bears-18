import { Router } from 'express';
import * as DevController from '../controllers/dev.controller';
import * as authController  from '../controllers/authController'
const router = new Router();

// Get all Devs
router.route('/devs').get(DevController.getDevs);

// Get one post by devid
router.route('/devs/:devid').get(authController.JWTlogin, DevController.getDev);

// Add a new Dev
//router.route('/devs').post(DevController.addDev);
// register a new dev
router.route('/devs/logout').post(authController.logout);
router.route('/devs/register').post(DevController.validateRegister,DevController.register,authController.login);
router.route('/devs/login').post(authController.login);
// Delete a dev by devid
router.route('/devs/:devid').delete(authController.JWTlogin, DevController.deleteDev);

export default router;
