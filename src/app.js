import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import userRoutes from './routes/userRoute.js';
// import { connectDB } from '../config/db.js';
// import dotenv from 'dotenv';

const app = express();

// Middleware
app.use(morgan('dev'));
// Permite conectarme desde cualquier origen (dominio) / frontend
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);

export default app;