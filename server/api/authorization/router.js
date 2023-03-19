import { Router } from "express";
import { login, registration } from "./controller.js";
import { loginValidation, registrationValidation } from "./validation.js";

const authorizationRouter = Router();

authorizationRouter.post('/login', loginValidation, login);
authorizationRouter.post('/registration', registrationValidation, registration);

export default authorizationRouter;
