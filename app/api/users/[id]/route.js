import { prisma } from '../../../../lib/prisma';

export async function GET(_, { params }) {
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });
  if (!user)
    return Response.json({ error: 'Usuario no encontrado' }, { status: 404 });
  return Response.json(user);
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const { nombre, correo, telefono } = data;

    const updatedUser = await prisma.user.update({
      where: { id: Number(params.id) },
      data: { nombre, correo, telefono },
    });

    return Response.json(updatedUser);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(_, { params }) {
  try {
    await prisma.user.delete({
      where: { id: Number(params.id) },
    });
    return Response.json({ message: 'Usuario eliminado' });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
