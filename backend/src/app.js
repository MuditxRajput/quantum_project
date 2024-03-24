import express from 'express';
import userRouter from './routes/userRoutes.js';
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',userRouter)
export { app };
