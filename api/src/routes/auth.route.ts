import { Router } from "express";
import AuthController from "../controllers/auth.controller";

const router = Router();

router.route('/').get(AuthController.isAuthenticated);

router.route('/register').post(AuthController.registerUser);

export default router;