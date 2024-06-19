import express from 'express';
import { signUpClient, loginClient } from '../controllers/clients.js'; // Correct path

const clientsRouter = express.Router();

clientsRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginClient(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

clientsRouter.post('/signup', async (req, res) => {
  const { email, firstName, lastName, address, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    const newClient = await signUpClient(email, firstName, lastName, address, password);
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

export default clientsRouter;
