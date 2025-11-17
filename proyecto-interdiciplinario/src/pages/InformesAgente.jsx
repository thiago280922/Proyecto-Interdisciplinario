import React from "react";
import { Link } from "react-router-dom";

export default function InformesAgente() {
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

          <Link to="/agente/informesagente" className="block hover:text-primary font-semibold">
            📊 Informes
          </Link>

          <Link to="/agente/configuracion" className="block hover:text-primary">⚙️ Configuración</Link>
        </nav>
      </aside>

      {/* === CONTENIDO === */}
      <div className="p-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">📊 Informes del agente</h1>

        <p className="text-lg text-gray-600 mb-6">
          Aquí podrás ver reportes de tus propiedades, leads y visitas.
        </p>

        <div className="bg-white dark:bg-gray-900/40 p-6 rounded shadow">
          <p className="text-gray-500">Próximamente informes automáticos...</p>
        </div>
      </div>
    </div>
  );
}
