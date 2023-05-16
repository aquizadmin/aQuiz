import {Router} from "express";

import authentication from "../middlewares/authentication.js";
import booksController from "../controllers/books.js";

const booksRouter = Router();

booksRouter.use(authentication.authenticate);
booksRouter.get("/:id", booksController.getBook);
booksRouter.get("/:page/:count/:category?", booksController.getBooks);

export default booksRouter;
