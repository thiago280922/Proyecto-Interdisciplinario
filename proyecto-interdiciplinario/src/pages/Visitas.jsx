import React, { useState } from "react";

export default function Visitas() {
  const [visitas, setVisitas] = useState([]);
  const [nueva, setNueva] = useState({
    propiedad: "",
    cliente: "",
    fecha: "",
  });

  const agregarVisita = () => {
    if (!nueva.propiedad || !nueva.cliente || !nueva.fecha) {
      alert("Completá todos los campos");
      return;
    }
    setVisitas([...visitas, { id: Date.now(), ...nueva }]);
    setNueva({ propiedad: "", cliente: "", fecha: "" });
  };

  return (
    <div className="p-8 font-display">
      <h1 className="text-3xl font-bold mb-6">📅 Visitas programadas</h1>

      <div className="bg-white dark:bg-gray-900/40 p-6 rounded-lg shadow-md max-w-xl mb-8">
        <h2 className="text-xl font-semibold mb-4">Nueva visita</h2>

        <input
          type="text"
          placeholder="Propiedad"
          value={nueva.propiedad}
          onChange={(e) => setNueva({ ...nueva, propiedad: e.target.value })}
          className="w-full p-2 rounded mb-3 bg-gray-100 dark:bg-gray-800"
        />

        <input
          type="text"
          placeholder="Cliente"
          value={nueva.cliente}
          onChange={(e) => setNueva({ ...nueva, cliente: e.target.value })}
          className="w-full p-2 rounded mb-3 bg-gray-100 dark:bg-gray-800"
        />

        <input
          type="datetime-local"
          value={nueva.fecha}
          onChange={(e) => setNueva({ ...nueva, fecha: e.target.value })}
          className="w-full p-2 rounded mb-4 bg-gray-100 dark:bg-gray-800"
        />

        <button
          onClick={agregarVisita}
          className="bg-primary text-white px-4 py-2 rounded hover:opacity-80"
        >
          Programar visita
        </button>
      </div>

      {visitas.length === 0 ? (
        <p className="text-gray-500 text-lg">No hay visitas registradas</p>
      ) : (
        <div className="space-y-3">
          {visitas.map((v) => (
            <div
              key={v.id}
              className="bg-white dark:bg-gray-900/40 p-4 rounded shadow flex justify-between"
            >
              <div>
                <p className="font-semibold">{v.propiedad}</p>
                <p className="text-sm text-gray-500">
                  Cliente: {v.cliente} — {new Date(v.fecha).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
