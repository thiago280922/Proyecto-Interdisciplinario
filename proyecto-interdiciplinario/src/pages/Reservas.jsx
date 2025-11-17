import React, { useState, useEffect } from "react";
import agentes from "../data/agentes";

export default function Reservas() {
  const [reservas, setReservas] = useState([]);
  const [nuevaReserva, setNuevaReserva] = useState({
    propiedad: "",
    agente: "",
    fecha: "",
  });

  // Cargar reservas guardadas
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("reservas")) || [];
    setReservas(data);
  }, []);

  // Guardar en localStorage
  const guardarReservas = (nuevas) => {
    setReservas(nuevas);
    localStorage.setItem("reservas", JSON.stringify(nuevas));
  };

  // Agregar nueva reserva
  const handleAgregar = () => {
    if (!nuevaReserva.propiedad || !nuevaReserva.agente || !nuevaReserva.fecha) {
      alert("⚠️ Debes completar todos los campos.");
      return;
    }

    const nueva = {
      id: Date.now(),
      ...nuevaReserva,
    };

    const actualizadas = [...reservas, nueva];
    guardarReservas(actualizadas);
    setNuevaReserva({ propiedad: "", agente: "", fecha: "" });
    alert("✅ Reserva agregada correctamente.");
  };

  // Eliminar reserva
  const handleEliminar = (id) => {
    const actualizadas = reservas.filter((r) => r.id !== id);
    guardarReservas(actualizadas);
  };

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
      {/* === SIDEBAR === */}
      <aside className="w-72 bg-white dark:bg-background-dark border-r border-gray-200 dark:border-gray-800 flex-col justify-between hidden lg:flex">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Re/Max
          </h1>
          <nav className="flex flex-col gap-2">
            <a href="/" className="flex items-center gap-3 px-4 py-2 rounded text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20">
              🏠 <span>Inicio</span>
            </a>
            <a href="/guardadas" className="flex items-center gap-3 px-4 py-2 rounded text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20">
              ❤️ <span>Propiedades guardadas</span>
            </a>
            <a href="/reservas" className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-bold bg-primary text-white">
              📅 <span>Reservas</span>
            </a>
            <a href="/transacciones" className="flex items-center gap-3 px-4 py-2 rounded text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20">
              💰 <span>Transacciones</span>
            </a>
            <a href="/perfil" className="flex items-center gap-3 px-4 py-2 rounded text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20">
              👤 <span>Perfil</span>
            </a>
          </nav>
        </div>

        <div className="p-6">
          <nav className="flex flex-col gap-1">
            <a href="/ayuda" className="flex items-center gap-3 px-4 py-2 rounded text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20">
              ❓ <span>Ayuda</span>
            </a>
            <a href="/configuracion" className="flex items-center gap-3 px-4 py-2 rounded text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20">
              ⚙️ <span>Configuración</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* === CONTENIDO PRINCIPAL === */}
      <main className="flex-1 px-6 py-8 md:px-8 lg:px-12">
        <h2 className="text-3xl font-bold mb-6">Reservas de visitas</h2>

        {/* FORMULARIO */}
        <div className="bg-white dark:bg-gray-900/50 p-6 rounded-lg shadow-md max-w-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Agendar nueva visita</h3>

          <input
            type="text"
            placeholder="🏠 Propiedad"
            value={nuevaReserva.propiedad}
            onChange={(e) =>
              setNuevaReserva({ ...nuevaReserva, propiedad: e.target.value })
            }
            className="border rounded-lg p-2 w-full mb-3 dark:bg-gray-800"
          />

          <select
            value={nuevaReserva.agente}
            onChange={(e) =>
              setNuevaReserva({ ...nuevaReserva, agente: e.target.value })
            }
            className="border rounded-lg p-2 w-full mb-3 dark:bg-gray-800"
          >
            <option value="">👤 Seleccionar agente</option>

            {agentes.map((agente) => (
              <option key={agente.id} value={agente.nombre}>
                {agente.nombre} — {agente.especialidad}
              </option>
            ))}
          </select>


          <input
            type="datetime-local"
            value={nuevaReserva.fecha}
            onChange={(e) =>
              setNuevaReserva({ ...nuevaReserva, fecha: e.target.value })
            }
            className="border rounded-lg p-2 w-full mb-4 dark:bg-gray-800"
          />

          <button
            onClick={handleAgregar}
            className="bg-primary text-white px-5 py-2 rounded-lg hover:opacity-80"
          >
            Agendar visita
          </button>
        </div>

        {/* LISTADO DE RESERVAS */}
        {reservas.length === 0 ? (
          <p className="text-gray-500 text-lg">No hay reservas aún 🕓</p>
        ) : (
          <div className="space-y-4">
            {reservas.map((r) => (
              <div
                key={r.id}
                className="bg-white dark:bg-gray-900/50 p-4 rounded-lg shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {r.propiedad}
                  </p>
                  <p className="text-sm text-gray-500">
                    👤 {r.agente} · 📅 {new Date(r.fecha).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => handleEliminar(r.id)}
                  className="text-red-500 font-semibold hover:underline"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
