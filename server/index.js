import { APP } from "./config/index.js";
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('It works');
})

app.listen(APP.PORT, APP.HOST, () => {
    console.log(`Server is working on http://${APP.HOST}:${APP.PORT}`);
})
