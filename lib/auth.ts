// lib/auth.ts
import { prisma } from './db';
import { prismaAdapter } from '@better-auth/prisma-adapter';
import { betterAuth } from 'better-auth';

export const auth = betterAuth({
  database: prismaAdapter(prisma),
  // resto de la configuración…
});
