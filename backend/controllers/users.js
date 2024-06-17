import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const loginUser = async (email, password) => {
  try {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid email or password');
    }

    return user;
  } catch (error) {
    throw new Error('Failed to login: ' + error.message);
  } finally {
    await prisma.$disconnect();
  }
};

export const signinUser = async (fullName, email, password) => {
  try {
    if (!fullName || !email || !password) {
      throw new Error('Full name, email, and password are required');
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    const saltRounds = parseInt(import.meta.env.VITE_BCRYPT_SALT_ROUNDS) || 8;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

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
