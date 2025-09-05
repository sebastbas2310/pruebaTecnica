'use client';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const role = 'ADMIN';

export default function Movimientos() {
  const [movimientos, setMovimientos] = useState([
    {
      id: 1,
      concepto: 'Ingreso',
      monto: 500,
      fecha: '2025-09-02',
      usuario: 'Admin',
    },
    {
      id: 2,
      concepto: 'Egreso',
      monto: 200,
      fecha: '2025-09-01',
      usuario: 'Admin',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [nuevoMovimiento, setNuevoMovimiento] = useState({
    concepto: '',
    monto: '',
    fecha: '',
  });

  // Cambia el tipo del evento para el select
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNuevoMovimiento((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nuevo = {
      id: movimientos.length + 1,
      concepto: nuevoMovimiento.concepto,
      monto: parseFloat(nuevoMovimiento.monto),
      fecha: nuevoMovimiento.fecha,
      usuario: 'Admin',
    };

    setMovimientos((prev) => [...prev, nuevo]);
    setNuevoMovimiento({ concepto: '', monto: '', fecha: '' });
    setShowForm(false);
  };

  return (
    <div className='flex'>
      <Sidebar role={role} />
      <div className='flex-1 p-6'>
        <h1 className='text-2xl font-bold mb-4'>Movimientos</h1>

        {role === 'ADMIN' && (
          <>
            <button
              onClick={() => setShowForm((prev) => !prev)}
              className='bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600'
            >
              {showForm ? 'Cerrar Formulario' : 'Nuevo Movimiento'}
            </button>

            {showForm && (
              <form
                onSubmit={handleSubmit}
                className='bg-gray-100 p-4 mb-4 rounded shadow-md space-y-4 max-w-md'
              >
                <div>
                  <label className='block font-medium'>Concepto</label>
                  <select
                    name='concepto'
                    value={nuevoMovimiento.concepto}
                    onChange={handleInputChange}
                    className='border rounded px-2 py-1 w-full'
                    required
                  >
                    <option value=''>Selecciona concepto</option>
                    <option value='Ingreso'>Ingreso</option>
                    <option value='Egreso'>Egreso</option>
                  </select>
                </div>
                <div>
                  <label className='block font-medium'>Monto</label>
                  <input
                    type='number'
                    name='monto'
                    value={nuevoMovimiento.monto}
                    onChange={handleInputChange}
                    className='border rounded px-2 py-1 w-full'
                    required
                  />
                </div>
                <div>
                  <label className='block font-medium'>Fecha</label>
                  <input
                    type='date'
                    name='fecha'
                    value={nuevoMovimiento.fecha}
                    onChange={handleInputChange}
                    className='border rounded px-2 py-1 w-full'
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'
                >
                  Guardar
                </button>
              </form>
            )}
          </>
        )}

        <table className='w-full table-auto border-collapse'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border p-2'>Concepto</th>
              <th className='border p-2'>Monto</th>
              <th className='border p-2'>Fecha</th>
              <th className='border p-2'>Usuario</th>
            </tr>
          </thead>
          <tbody>
            {movimientos.map((m) => (
              <tr key={m.id} className='text-center'>
                <td className='border p-2'>{m.concepto}</td>
                <td className='border p-2'>{m.monto}</td>
                <td className='border p-2'>{m.fecha}</td>
                <td className='border p-2'>{m.usuario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
