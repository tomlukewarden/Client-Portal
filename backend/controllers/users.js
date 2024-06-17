import { PrismaClient } from "@prisma/client/extension";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const loginUser = async (email, password) => {
  try{
    const user = await prisma.user.findUnique({
      where: {email}
    })
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid email or password');
    }

    return user;
  } catch (error) {
    throw new Error('Failed to login: ' + error.message);
  }
};