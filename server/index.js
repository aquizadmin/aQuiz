import { APP, MONGODB } from "./config/index.js";
import mongoose from "mongoose";
import express from 'express';

import authorizationRouter from './api/authorization/router.js';
import usersRoutes from './api/users/router.js';

await mongoose.connect(`mongodb://${MONGODB.HOST}:${MONGODB.PORT}/${MONGODB.DATABASE.NAME}`, {
    useNewUrlParser: true,
});

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
