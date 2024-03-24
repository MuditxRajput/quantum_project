import { Router } from "express";
import { registerRoute } from "../controllers/User.controller.js";
const router = Router();
router.route('/register').post(registerRoute)


export default router ;

