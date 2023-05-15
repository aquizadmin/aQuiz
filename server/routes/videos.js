import { Router } from "express";

import authentication from "../middlewares/authentication.js";
import videosController from "../controllers/videos.js";

const videosRouter = Router();

videosRouter.use(authentication.authenticate);
videosRouter.get("/:id", videosController.getVideo);
videosRouter.get("/:page/:count", videosController.getVideos);

export default videosRouter;
