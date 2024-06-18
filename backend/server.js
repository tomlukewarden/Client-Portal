import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import clientsRouter from './routes/clients.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/clients', clientsRouter);

const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

export default app;
