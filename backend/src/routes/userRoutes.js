import { Router } from "express";
import { forgotPassword, loginRoute, registerRoute, totalStudents } from "../controllers/User.controller.js";
const router = Router();
router.route('/register').post(registerRoute)
router.route('/login').post(loginRoute)
router.route('/forgotPassword').post(forgotPassword)
router.route('/totalStudents').get(totalStudents)


export default router ;

