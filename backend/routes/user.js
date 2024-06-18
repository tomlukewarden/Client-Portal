import express from 'express';
import { signUpUser, loginUser } from '../controllers/users.js'; // Correct path

const usersRouter = express.Router();

usersRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

usersRouter.post('/signup', async (req, res) => {
  const { email, fullName, password } = req.body;
  try {
    const newUser = await signUpUser(email, fullName, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default usersRouter;
