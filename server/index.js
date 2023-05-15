import { SERVER } from "./config/index.js";
import * as database from "./database/index.js";
import express from "express";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import authorizationRouter from "./routes/authorization.js";
import usersRouter from "./routes/users.js";
import gameRouter from "./routes/game.js";
import questionsRouter from "./routes/questions.js";
import booksRouter from "./routes/books.js";
import videosRouter from "./routes/videos.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const staticPath = join(__dirname, "public");

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/public", express.static(staticPath));

app.use("/", authorizationRouter);
app.use("/users", usersRouter);
app.use("/game", gameRouter);
app.use("/questions", questionsRouter);
app.use("/books", booksRouter);
app.use("/videos", videosRouter);

await database.connect();

app.listen(SERVER.PORT, SERVER.HOST, () => {
  console.log(`Server is working on http://${SERVER.HOST}:${SERVER.PORT}`);
});

process.on("uncaughtException", function (err) {
  console.log(err);
});
