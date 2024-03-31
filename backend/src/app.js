import cors from 'cors';
import express from 'express';
import adminRoutes from './routes/adminRoutes.js';
import userRouter from './routes/userRoutes.js';
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())
app.use('/user',userRouter)
app.use('/admin',adminRoutes);
export { app };
