'use server';

import { ReturnType } from '@/@types/return-type';
import { prisma } from '@/lib/prisma';
import { User } from '@prisma/client';

export async function registerUser(data: Omit<User, 'created_at' | 'id'>): Promise<ReturnType> {
  try {
    const { name, username } = data;

    const userExists = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (userExists) {
      return { ok: false, message: 'Este nome de usuário já está sendo utilizado' };
    }

    const user = await prisma.user.create({
      data: {
        name: name,
        username: username,
      },
    });

    return { ok: true, data: user };
  } catch (err) {
    if (err instanceof Error) return { ok: false, message: err.message };
    return { ok: false, message: 'Erro ao registrar' };
  }
}
