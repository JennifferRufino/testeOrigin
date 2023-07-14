import express from 'express';
import cors from 'cors';
import router from './routes/router';

const app = express();

app.use(cors());

app.use('/api/dados', router);

export default app;
