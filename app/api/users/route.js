/*import { prisma } from '@/lib/prisma';

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, emailVerified, image, createdAt, updatedAt } = data;

    const newUser = await prisma.user.create({
      data: { name, email, emailVerified, image, createdAt, updatedAt },
    });

    return Response.json(newUser, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
*/