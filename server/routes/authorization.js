import { Router } from "express";
import { login, registration } from "../controllers/authorization.js";
import { loginValidation, registrationValidation } from "../validation/authorization.js";

const authorizationRouter = Router();

authorizationRouter.post('/login', loginValidation, login);
authorizationRouter.post('/registration', registrationValidation, registration);

export default authorizationRouter;