import { Router } from "express";
import { forgotPassword, loginRoute, registerRoute } from "../controllers/User.controller.js";
const router = Router();
router.route('/register').post(registerRoute)
router.route('/login').post(loginRoute)
router.route('/forgotPassword').post(forgotPassword)


export default router ;

