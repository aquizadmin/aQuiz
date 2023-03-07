import { Router } from "express";
import { login, registration } from "../controllers/authorization.js";

const authorizationRouter = Router();

authorizationRouter.post('/login', login);
authorizationRouter.post('/registration', registration);

export default authorizationRouter;