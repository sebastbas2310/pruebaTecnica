// GET: Obtener todos los movimientos
export async function GET(request) {
  return new Response(JSON.stringify(movimientos), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// POST: Crear un nuevo movimiento
export async function POST(request) {
  const body = await request.json();
  const nuevo = {
    id: movimientos.length ? movimientos[movimientos.length - 1].id + 1 : 1,
    ...body,
  };
  movimientos.push(nuevo);
  return new Response(JSON.stringify(nuevo), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

// PUT: Actualizar un movimiento
export async function PUT(request) {
  const body = await request.json();
  const index = movimientos.findIndex((m) => m.id === body.id);
  if (index === -1) {
    return new Response(JSON.stringify({ error: "No encontrado" }), { status: 404 });
  }
  movimientos[index] = { ...movimientos[index], ...body };
  return new Response(JSON.stringify(movimientos[index]), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// DELETE: Eliminar un movimiento
export async function DELETE(request) {
  const body = await request.json();
  const index = movimientos.findIndex((m) => m.id === body.id);
  if (index === -1) {
    return new Response(JSON.stringify({ error: "No encontrado" }), { status: 404 });
  }
  const eliminado = movimientos.splice(index, 1)[0];
  return new Response(JSON.stringify(eliminado), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}