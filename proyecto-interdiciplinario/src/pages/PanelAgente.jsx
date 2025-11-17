import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PanelAgente() {
  const navigate = useNavigate();

  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("todas");

  // Datos reales del panel (los del screenshot)
  const propiedades = [
    {
      id: 1,
      direccion: "123 Calle Principal, Ciudad",
      tipo: "Casa",
      precio: "$250,000",
      estado: "En Venta",
    },
    {
      id: 2,
      direccion: "456 Avenida Central, Ciudad",
      tipo: "Departamento",
      precio: "$180,000",
      estado: "En Venta",
    },
    {
      id: 3,
      direccion: "789 Calle del Parque, Ciudad",
      tipo: "Casa",
      precio: "$320,000",
      estado: "Vendida",
    },
  ];

  // FILTRO POR BUSQUEDA
  const filtrado = propiedades.filter((p) => {
    const texto = busqueda.toLowerCase();
    const coincideBusqueda =
      p.direccion.toLowerCase().includes(texto) ||
      p.id.toString().includes(texto);

    const coincideEstado =
      filtro === "todas"
        ? true
        : filtro === "venta"
        ? p.estado === "En Venta"
        : p.estado === "Vendida";

    return coincideBusqueda && coincideEstado;
  });

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white dark:bg-background-dark flex flex-col border-r border-gray-200 dark:border-gray-800">
        <div className="p-6 flex items-center justify-between">
          <h1
            className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer"
            onClick={() => navigate("/agente")}
          >
            Re/Max Agente
          </h1>

          <button
            onClick={() => navigate("/")}
            className="text-xs font-medium text-primary hover:underline"
          >
            Cerrar sesión
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 text-sm font-medium">
          <button className="w-full text-left flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary">
            🏠 Inicio
          </button>
          <button
            onClick={() => navigate("/agente/visitasagente")}
            className="w-full text-left flex items-center gap-3 px-4 py-2 rounded-lg"
          >
            📅 Visitas
          </button>
          <button
            onClick={() => navigate("/agente/leadsagente")}
            className="w-full text-left flex items-center gap-3 px-4 py-2 rounded-lg"
          >
            👥 Leads
          </button>
          <button
            onClick={() => navigate("/agente/informesagente")}
            className="w-full text-left flex items-center gap-3 px-4 py-2 rounded-lg"
          >
            📊 Informes
          </button>
          <button
            onClick={() => navigate("/agente/configuracion")}
            className="w-full text-left flex items-center gap-3 px-4 py-2 rounded-lg"
          >
            ⚙️ Configuración
          </button>
        </nav>
      </aside>

      {/* CONTENIDO */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold">Propiedades Asignadas</h1>
        <p className="text-gray-500 mt-1">
          Gestiona tus propiedades y sigue el progreso de las ventas.
        </p>

        {/* BUSCADOR */}
        <div className="mt-6">
          <input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="🔍 Buscar propiedades por dirección o ID"
            className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
          />
        </div>

        {/* TABS */}
        <div className="flex gap-6 mt-6 border-b border-gray-300 dark:border-gray-700 pb-2">
          <button
            className={filtro === "todas" ? "text-primary font-semibold" : ""}
            onClick={() => setFiltro("todas")}
          >
            Todas
          </button>
          <button
            className={filtro === "venta" ? "text-primary font-semibold" : ""}
            onClick={() => setFiltro("venta")}
          >
            En Venta
          </button>
          <button
            className={filtro === "vendidas" ? "text-primary font-semibold" : ""}
            onClick={() => setFiltro("vendidas")}
          >
            Vendidas
          </button>
        </div>

        {/* TABLA */}
        <div className="mt-6 bg-white dark:bg-gray-900 rounded-lg shadow">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 text-sm border-b border-gray-200 dark:border-gray-800">
                <th className="p-4">DIRECCIÓN</th>
                <th className="p-4">TIPO</th>
                <th className="p-4">PRECIO</th>
                <th className="p-4">ESTADO</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {filtrado.map((p) => (
                <tr key={p.id} className="border-b border-gray-200 dark:border-gray-800">
                  <td className="p-4">{p.direccion}</td>
                  <td className="p-4">{p.tipo}</td>
                  <td className="p-4">{p.precio}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        p.estado === "En Venta"
                          ? "bg-green-200 text-green-700"
                          : "bg-blue-200 text-blue-700"
                      }`}
                    >
                      {p.estado}
                    </span>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => navigate(`/propiedad/${p.id}`)}
                      className="text-primary font-medium hover:underline"
                    >
                      Ver Detalles
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtrado.length === 0 && (
            <p className="p-6 text-center text-gray-500">
              No hay propiedades que coincidan con la búsqueda.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
