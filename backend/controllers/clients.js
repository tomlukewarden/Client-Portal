import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

export const loginClient = async (email, password) => {
  try {
    const client = await prisma.clients.findUnique({
      where: { email },
    });

    if (!client || !(await bcrypt.compare(password, client.password))) {
      throw new Error('Invalid email or password');
    }

    return client;
  } catch (error) {
    throw new Error('Failed to login: ' + error.message);
  }
};

export const signUpClient = async (email, name, password) => {
  console.log('Received data:', { email, name, password }); 
  try {
    if (!email || !name || !password) {
      throw new Error('Email, full name and password are required');
    }

    const existingClient = await prisma.clients.findUnique({
      where: { email },
    });

    if (existingClient) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newClient = await prisma.clients.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return newClient;
  } catch (error) {
    throw new Error('Failed to sign up: ' + error.message);
  } finally {
    await prisma.$disconnect();
  }
};

export default prisma;
