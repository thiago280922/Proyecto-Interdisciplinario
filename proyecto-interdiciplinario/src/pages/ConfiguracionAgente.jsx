import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ConfiguracionAgente() {

  const [form, setForm] = useState({
    nombre: "Agente Re/Max",
    email: "agente@remax.com",
    telefono: "11 0000 0000",
  });

  const actualizar = () => {
    alert("Configuración guardada ✔");
  };

  return (
    <div className="flex font-display">

      {/* === ASIDE UNIFICADO === */}
      <aside className="w-64 min-h-screen bg-white dark:bg-gray-900/40 shadow-md p-6">

        <h2 className="text-xl font-bold mb-2">Re/Max Agente</h2>
        <button className="text-red-500 mb-6 hover:underline">
          Cerrar sesión
        </button>

        <nav className="space-y-4">
          <Link to="/home" className="block hover:text-primary">🏠 Inicio</Link>
          <Link to="/agente" className="block hover:text-primary">🏢 Propiedades</Link>

          <Link to="/agente/visitasagente" className="block hover:text-primary">📅 Visitas</Link>
          <Link to="/agente/leadsagente" className="block hover:text-primary">👥 Leads</Link>
          <Link to="/agente/informesagente" className="block hover:text-primary">📊 Informes</Link>

          <Link
            to="/agente/configuracion"
            className="block hover:text-primary font-semibold"
          >
            ⚙️ Configuración
          </Link>
        </nav>
      </aside>

      {/* === CONTENIDO === */}
      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-6">⚙️ Configuración del Agente</h1>

        <div className="bg-white dark:bg-gray-900/40 p-6 rounded-lg shadow-md max-w-xl">

          <label className="block mb-3">
            <span className="text-sm text-gray-500">Nombre completo</span>
            <input
              type="text"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800"
            />
          </label>

          <label className="block mb-3">
            <span className="text-sm text-gray-500">Correo electrónico</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800"
            />
          </label>

          <label className="block mb-4">
            <span className="text-sm text-gray-500">Teléfono</span>
            <input
              type="text"
              value={form.telefono}
              onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800"
            />
          </label>

          <button
            onClick={actualizar}
            className="bg-primary text-white px-4 py-2 rounded hover:opacity-80"
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
}
