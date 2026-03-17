import { Router } from "express";
import { validateSignup,validateToken } from "../middleware/authmiddleware.js";
import { loginController, registerController } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signUp",validateSignup, registerController);
authRouter.post("/login", validateToken, loginController);

export default authRouter;