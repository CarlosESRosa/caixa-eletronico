import express from 'express';
import saqueRoutes from './routes/saqueRoutes';

const app = express();

app.use(express.json());
app.use('/api', saqueRoutes);

export default app;
