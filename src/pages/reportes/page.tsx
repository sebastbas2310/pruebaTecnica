'use client';
import Sidebar from '../../components/Sidebar';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState } from 'react';

// Registrar los componentes necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const role = 'ADMIN'; // Ajusta según tu lógica

export default function Reportes() {
  const [nuevoMovimiento, setNuevoMovimiento] = useState({
    concepto: '',
  });

  // Tipado correcto para el evento
  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNuevoMovimiento({
      ...nuevoMovimiento,
      [name]: value,
    });
  };

  const data = {
    labels: ['Sept 1', 'Sept 2', 'Sept 3'],
    datasets: [
      {
        label: 'Ingresos',
        data: [500, 700, 300],
        backgroundColor: 'green',
      },
      {
        label: 'Egresos',
        data: [200, 300, 100],
        backgroundColor: 'red',
      },
    ],
  };

  return (
    <div className='flex'>
      <Sidebar role={role} />
      <div className='flex-1 p-6'>
        <h1 className='text-2xl font-bold mb-4'>Reportes</h1>
        <p className='mb-4'>Saldo actual: $1,000</p>
        <div className='w-full max-w-3xl mb-4'>
          <Bar data={data} />
        </div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
          Descargar CSV
        </button>
      </div>
    </div>
  );
}
