import authorizationController from "../controllers/authorization.js";
import authorizationValidation from "../validation/authorization.js";

import { Router } from "express";
const authorizationRouter = Router();

authorizationRouter.post('/login', authorizationValidation.loginValidation, authorizationController.login);
authorizationRouter.post('/registration', authorizationValidation.registrationValidation, authorizationController.registration);

export default authorizationRouter;