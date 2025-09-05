'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Auth() {
  const router = useRouter(); 

  // Estados para login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Estados para registro
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loginEmail, password: loginPassword }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Login exitoso");
      localStorage.setItem("token", data.token);
      router.push("/layout"); 
    } else {
      alert(data.error || "Error en login");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: registerEmail, password: registerPassword }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Usuario registrado");
      router.push("/layout"); 
    } else {
      alert(data.error || "Error en registro");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Login - izquierda */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-10">
        <h2 className="text-2xl font-bold mb-6">Iniciar Sesión</h2>
        <form className="flex flex-col gap-4 w-full max-w-sm" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo"
            className="border p-2 rounded"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border p-2 rounded"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Entrar
          </button>
        </form>
      </div>

      {/* Registro - derecha */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10 border-l">
        <h2 className="text-2xl font-bold mb-6">Registrarse</h2>
        <form className="flex flex-col gap-4 w-full max-w-sm" onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Correo"
            className="border p-2 rounded"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border p-2 rounded"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
