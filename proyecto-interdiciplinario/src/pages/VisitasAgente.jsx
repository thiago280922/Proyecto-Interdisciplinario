import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function VisitasAgente() {
  const [visitas, setVisitas] = useState([]);

  const agregarVisitaDemo = () => {
    const nueva = {
      id: Date.now(),
      cliente: "Juan Pérez",
      propiedad: "Departamento en Recoleta",
      fecha: new Date().toLocaleString(),
    };
    setVisitas([...visitas, nueva]);
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

          <Link to="/agente/visitasagente" className="block hover:text-primary font-semibold">
            📅 Visitas
          </Link>

          <Link to="/agente/leadsagente" className="block hover:text-primary">👥 Leads</Link>
          <Link to="/agente/informesagente" className="block hover:text-primary">📊 Informes</Link>
          <Link to="/agente/configuracion" className="block hover:text-primary">⚙️ Configuración</Link>
        </nav>
      </aside>

      {/* === CONTENIDO === */}
      <div className="p-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">📅 Visitas programadas</h1>

        <button
          onClick={agregarVisitaDemo}
          className="bg-primary text-white px-4 py-2 rounded mb-6 hover:opacity-80"
        >
          Agregar visita demo
        </button>

        {visitas.length === 0 ? (
          <p className="text-gray-500 text-lg">Aún no tenés visitas registradas</p>
        ) : (
          <div className="space-y-3">
            {visitas.map((v) => (
              <div key={v.id} className="bg-white dark:bg-gray-900/40 p-4 rounded shadow">
                <p className="font-semibold">{v.cliente}</p>
                <p>Propiedad: {v.propiedad}</p>
                <p className="text-sm text-gray-400">{v.fecha}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
