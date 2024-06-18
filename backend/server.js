import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usersRouter from './routes/user.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use('/users', usersRouter);

const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

export default app;
