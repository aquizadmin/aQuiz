import { APP } from "./config/index.js";
import express from 'express';

// middlewares
import mockResponse from "./middleware/mochResponse.js";

const app = express();
app.use(express.json());

app.use(mockResponse);

app.use('*', (req, res) => {
    res.sendStatus(404);
    res.end();
})

app.listen(APP.PORT, APP.HOST, () => {
    console.log(`Server is working on http://${APP.HOST}:${APP.PORT}`);
})
