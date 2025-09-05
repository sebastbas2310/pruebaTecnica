/*import { prisma } from './db';
import { prismaAdapter } from '@better-auth/prisma-adapter';
import { betterAuth } from '@prisma/client';


export const auth = betterAuth({
database: prismaAdapter(prisma),
socialProviders: {
github: {
clientId: process.env.GITHUB_CLIENT_ID!,
clientSecret: process.env.GITHUB_CLIENT_SECRET!
}
},
// Crea el usuario si no existe; el rol por defecto lo pone Prisma (ADMIN)
events: {
async userCreated({ user }) {
// Asegura ADMIN por si el provider no rellena todo
if (!user.role) {
await prisma.user.update({ where: { id: user.id }, data: { role: "ADMIN" } });
}
}
}
});*/
