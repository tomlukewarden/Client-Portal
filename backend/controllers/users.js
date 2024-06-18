import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

export const loginUser = async (email, password) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid email or password');
    }

    return user;
  } catch (error) {
    throw new Error('Failed to login: ' + error.message);
  }
};

export const signUpUser = async (email, fullName, password) => {
  console.log('Received data:', { email, fullName, password }); 
  try {
    if (!email || !fullName || !password) {
      throw new Error('Email, full name, and password are required');
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
    });

    return newUser;
  } catch (error) {
    throw new Error('Failed to sign up: ' + error.message);
  } finally {
    await prisma.$disconnect();
  }
};