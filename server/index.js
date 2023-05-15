import { SERVER } from "./config/index.js";
import * as database from "./database/index.js";
import express from "express";
import cors from "cors";

import authorizationRouter from "./routes/authorization.js";
import usersRouter from "./routes/users.js";
import gameRouter from "./routes/game.js";
import questionsRouter from "./routes/questions.js";

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

app.use("/", authorizationRouter);
app.use("/users", usersRouter);
app.use("/game", gameRouter);
app.use("/questions", questionsRouter);

await database.connect();

app.listen(SERVER.PORT, SERVER.HOST, () => {
  console.log(`Server is working on http://${SERVER.HOST}:${SERVER.PORT}`);
});

process.on("uncaughtException", function (err) {
  console.log(err);
});
