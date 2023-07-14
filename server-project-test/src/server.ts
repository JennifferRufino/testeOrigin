import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import app from './app';

const port = process.env.PORT || 3000;

const server = express();

server.use(app);

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
