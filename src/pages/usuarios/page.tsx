'use client';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const role = 'ADMIN';

const initialUsers = [
  {
    id: 1,
    nombre: 'Juan Perez',
    correo: 'juan@example.com',
    telefono: '3001234567',
    rol: 'ADMIN',
  },
  {
    id: 2,
    nombre: 'Ana Gomez',
    correo: 'ana@example.com',
    telefono: '3007654321',
    rol: 'USER',
  },
];

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [deleteUser, setDeleteUser] = useState<any>(null);

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditingUser((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsuarios((prev) =>
      prev.map((u) => (u.id === editingUser.id ? editingUser : u))
    );
    setEditingUser(null);
  };

  const handleDelete = () => {
    setUsuarios((prev) => prev.filter((u) => u.id !== deleteUser.id));
    setDeleteUser(null);
  };

  return (
    <div className='flex'>
      <Sidebar role={role} />
      <div className='flex-1 p-6 relative'>
        <h1 className='text-2xl font-bold mb-4'>Gestión de Usuarios</h1>
        <table className='w-full table-auto border-collapse'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border p-2'>Nombre</th>
              <th className='border p-2'>Correo</th>
              <th className='border p-2'>Teléfono</th>
              <th className='border p-2'>Rol</th>
              <th className='border p-2'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id} className='text-center'>
                <td className='border p-2'>{u.nombre}</td>
                <td className='border p-2'>{u.correo}</td>
                <td className='border p-2'>{u.telefono}</td>
                <td className='border p-2'>{u.rol}</td>
                <td className='border p-2 space-x-2'>
                  <button
                    onClick={() => setEditingUser(u)}
                    className='bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600'
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => setDeleteUser(u)}
                    className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600'
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal de edición */}
        {editingUser && (
          <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center'>
            <form
              onSubmit={handleSaveEdit}
              className='bg-white p-6 rounded shadow-md space-y-4 w-80'
            >
              <h2 className='text-xl font-bold'>Editar Usuario</h2>
              <div>
                <label className='block font-medium'>Nombre</label>
                <input
                  type='text'
                  name='nombre'
                  value={editingUser.nombre}
                  onChange={handleEditChange}
                  className='border rounded px-2 py-1 w-full'
                  required
                />
              </div>
              <div>
                <label className='block font-medium'>Rol</label>
                <select
                  name='rol'
                  value={editingUser.rol}
                  onChange={handleEditChange}
                  className='border rounded px-2 py-1 w-full'
                >
                  <option value='ADMIN'>ADMIN</option>
                  <option value='USER'>USER</option>
                </select>
              </div>
              <div className='flex justify-end space-x-2'>
                <button
                  type='button'
                  onClick={() => setEditingUser(null)}
                  className='px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500'
                >
                  Cancelar
                </button>
                <button
                  type='submit'
                  className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Popup de confirmación de eliminación */}
        {deleteUser && (
          <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center'>
            <div className='bg-white p-6 rounded shadow-md w-72 text-center space-y-4'>
              <h2 className='text-xl font-bold'>Eliminar Usuario</h2>
              <p>
                ¿Estás seguro de que deseas eliminar a{' '}
                <strong>{deleteUser.nombre}</strong>?
              </p>
              <div className='flex justify-center space-x-2'>
                <button
                  onClick={() => setDeleteUser(null)}
                  className='px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500'
                >
                  Cancelar
                </button>
                <button
                  onClick={handleDelete}
                  className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
