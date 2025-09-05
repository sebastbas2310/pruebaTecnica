"use client";
import { useRouter } from "next/navigation";

type Props = {
  role: "ADMIN" | "USER";
};

export default function Sidebar({ role }: Props) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <button
        className="text-2xl font-bold mb-8 bg-transparent hover:text-blue-400 text-white"
        onClick={() => router.push("/layout")}
      >
        Mi App Financiera
      </button>
      <button className="mb-2 hover:bg-gray-700 p-2 rounded" onClick={() => router.push("/movimientos/page")}>
        Movimientos
      </button>
      {role === "ADMIN" && (
        <>
          <button className="mb-2 hover:bg-gray-700 p-2 rounded" onClick={() => router.push("/usuarios/page")}>
            Gestión de Usuarios
          </button>
          <button className="mb-2 hover:bg-gray-700 p-2 rounded" onClick={() => router.push("/reportes/page")}>
            Reportes
          </button>
        </>
      )}
      <div className="mt-auto">
        <button
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded w-full"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
