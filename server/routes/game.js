import authentication from "../middlewares/authentication.js";
import gameController from "../controllers/game.js";

import { Router } from "express";
const gameRouter = Router();

gameRouter.use(authentication.authenticate);
gameRouter.post("/startGame", gameController.startGame);
gameRouter.post("/finishGame", gameController.finishGame);

export default gameRouter;
