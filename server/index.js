import { APP } from "./config/index.js";
import connection from "./database/index.js";
import express from 'express';

import authorizationRouter from './routes/authorization.js';
import usersRoutes from './routes/users.js';

const app = express();

app.use(express.json());

app.use('/', authorizationRouter);
app.use('/users', usersRoutes);

app.listen(APP.PORT, APP.HOST, () => {
    console.log(`Server is working on http://${APP.HOST}:${APP.PORT}`);
})

process.on('uncaughtException', function(err) {
    console.log(err)
})
