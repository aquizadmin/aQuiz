import { APP } from "./config/index.js";
import connection from "./database/index.js";
import express from 'express';

import authorizationRouter from './routes/authorization.js';
import usersRouter from './routes/users.js';
import questionsRouter from './routes/questions.js';

const app = express();

app.use(express.json());

app.use('/', authorizationRouter);
app.use('/users', usersRouter);
app.use('/questions', questionsRouter);

app.listen(APP.PORT, APP.HOST, () => {
    console.log(`Server is working on http://${APP.HOST}:${APP.PORT}`);
})

process.on('uncaughtException', function(err) {
    console.log(err)
})
