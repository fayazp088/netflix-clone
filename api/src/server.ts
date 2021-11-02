import express from 'express';
import dotenv from 'dotenv';

dotenv.config({
    path: './config/config.env'
});

const app = express();
const port = process.env.PORT;

app.listen(port, () => console.log(`running on ${process.env.DEV_ENV} mode and on server ${process.env.PORT}`));
