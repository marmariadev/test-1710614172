import express, { Application } from 'express';
import userRoutes from './routes/userRoutes';

const app: Application = express();

app.use(express.json());

app.use('/users', userRoutes);

export default app;
