import { Router } from "express";
import {AuthController} from '../controllers/auth.controller';
import { registerValidation } from "../middlewares/validators.middleware";
import { ValidationMiddleware } from "../middlewares/validation.middleware";
import { loginValidation } from "../middlewares/validators.middleware";
const router = Router()

router.post('/login', loginValidation, ValidationMiddleware, AuthController.login)
//router.post('/logout', AuthController.logout)
router.post('/register', registerValidation, ValidationMiddleware, AuthController.register)

export default router