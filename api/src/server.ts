import express from 'express';
import dotenv from 'dotenv';
import connect from '../config/db';
import UserRoutes from './routes/user.route';
import AuthRoutes from './routes/auth.route';

dotenv.config({
    path: './config/config.env'
});

const app = express();
const port = process.env.PORT;
app.use(express.json());
connect();

//User Routes
app.use('/api/v1/user', UserRoutes);
app.use('/api/v1/auth', AuthRoutes);


app.listen(port, () => console.log(`running on ${process.env.DEV_ENV} mode and on server ${process.env.PORT}`));
