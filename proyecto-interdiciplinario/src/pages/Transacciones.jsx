import React, { useState, useEffect } from "react";
import agentes from "../data/agentes";

export default function Transacciones() {
  const [transacciones, setTransacciones] = useState([]);
  const [nueva, setNueva] = useState({
    tipo: "Venta",
    propiedad: "",
    monto: "",
    agente: "",
    fecha: "",
  });

  // Cargar transacciones desde localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transacciones")) || [];
    setTransacciones(data);
  }, []);

  // Guardar en localStorage
  const guardarTransacciones = (nuevas) => {
    setTransacciones(nuevas);
    localStorage.setItem("transacciones", JSON.stringify(nuevas));
  };

  // Agregar nueva transacción
  const handleAgregar = () => {
    const { tipo, propiedad, monto, agente, fecha } = nueva;

    if (!propiedad || !monto || !agente || !fecha) {
      alert("⚠️ Todos los campos son obligatorios.");
      return;
    }

    const nuevaTrans = {
      id: Date.now(),
      tipo,
      propiedad,
      monto,
      agente,
      fecha,
    };

    const actualizadas = [...transacciones, nuevaTrans];
    guardarTransacciones(actualizadas);
    setNueva({ tipo: "Venta", propiedad: "", monto: "", agente: "", fecha: "" });
    alert("✅ Transacción registrada correctamente.");
  };

  // Eliminar una transacción
  const handleEliminar = (id) => {
    const actualizadas = transacciones.filter((t) => t.id !== id);
    guardarTransacciones(actualizadas);
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
            <a href="/reservas" className="flex items-center gap-3 px-4 py-2 rounded text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20">
              📅 <span>Reservas</span>
            </a>
            <a href="/transacciones" className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-bold bg-primary text-white">
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
        <h2 className="text-3xl font-bold mb-6">Transacciones</h2>

        {/* FORMULARIO */}
        <div className="bg-white dark:bg-gray-900/50 p-6 rounded-lg shadow-md max-w-xl mb-8">
          <h3 className="text-xl font-semibold mb-4">Registrar nueva transacción</h3>

          <select
            value={nueva.tipo}
            onChange={(e) => setNueva({ ...nueva, tipo: e.target.value })}
            className="border rounded-lg p-2 w-full mb-3 dark:bg-gray-800"
          >
            <option value="Venta">Venta</option>
            <option value="Compra">Compra</option>
          </select>

          <input
            type="text"
            placeholder="🏠 Propiedad"
            value={nueva.propiedad}
            onChange={(e) => setNueva({ ...nueva, propiedad: e.target.value })}
            className="border rounded-lg p-2 w-full mb-3 dark:bg-gray-800"
          />

          <input
            type="number"
            placeholder="💲 Monto"
            value={nueva.monto}
            onChange={(e) => setNueva({ ...nueva, monto: e.target.value })}
            className="border rounded-lg p-2 w-full mb-3 dark:bg-gray-800"
          />

          <select
            value={nueva.agente}
            onChange={(e) => setNueva({ ...nueva, agente: e.target.value })}
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
            type="date"
            value={nueva.fecha}
            onChange={(e) => setNueva({ ...nueva, fecha: e.target.value })}
            className="border rounded-lg p-2 w-full mb-4 dark:bg-gray-800"
          />

          <button
            onClick={handleAgregar}
            className="bg-primary text-white px-5 py-2 rounded-lg hover:opacity-80"
          >
            Registrar transacción
          </button>
        </div>

        {/* LISTADO */}
        {transacciones.length === 0 ? (
          <p className="text-gray-500 text-lg">No hay transacciones registradas aún 💸</p>
        ) : (
          <div className="space-y-4">
            {transacciones.map((t) => (
              <div
                key={t.id}
                className="bg-white dark:bg-gray-900/50 p-4 rounded-lg shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {t.tipo} - {t.propiedad}
                  </p>
                  <p className="text-sm text-gray-500">
                    💲 {t.monto} · 👤 {t.agente} · 📅 {new Date(t.fecha).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => handleEliminar(t.id)}
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
