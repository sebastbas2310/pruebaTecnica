'use client';
import { useState } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AuthModal({ isOpen, onClose }: Props) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = isLogin ? '/api/auth/login' : '/api/auth/register';
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      alert(isLogin ? 'Logueado!' : 'Registrado!');
      onClose();
    } else {
      alert(data.error || 'Error');
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white rounded-xl p-6 w-96'>
        <h2 className='text-xl font-bold mb-4'>
          {isLogin ? 'Login' : 'Registro'}
        </h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <input
            type='email'
            placeholder='Email'
            className='border p-2 rounded'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Contraseña'
            className='border p-2 rounded'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type='submit'
            className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
          >
            {isLogin ? 'Entrar' : 'Registrarse'}
          </button>
        </form>
        <p className='mt-4 text-center text-sm'>
          {isLogin ? 'No tienes cuenta?' : 'Ya tienes cuenta?'}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className='text-blue-500 underline'
          >
            {isLogin ? 'Regístrate' : 'Inicia sesión'}
          </button>
        </p>
        <button
          onClick={onClose}
          className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
        >
          ✕
        </button>
      </div>
    </div>
  );
}
