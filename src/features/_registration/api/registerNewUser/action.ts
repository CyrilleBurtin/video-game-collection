'use server';

import { userSchema } from '@/features/_registration/schemas/userSchema';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function registerUser(_: unknown, formData: FormData) {
  console.log('Form Data Received:', Object.fromEntries(formData.entries()));

  const validatedFields = userSchema.safeParse({
    name: formData.get('name')?.toString(),
    firstname: formData.get('firstname')?.toString(),
    email: formData.get('email')?.toString(),
    password: formData.get('password')?.toString(),
  });

  if (!validatedFields.success) {
    throw new Error('Invalid form data');
  }

  try {
    const userData = await prisma.user.create({
      data: validatedFields.data,
    });
    revalidatePath('/');
    return { userData };
  } catch (error) {
    console.error(error);
    throw new Error(`Error: ${error instanceof Error ? error.message : error}`);
  } finally {
    await prisma.$disconnect();
  }
}
