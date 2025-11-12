import React, { useState } from "react";

export default function Ayuda() {
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setMensaje("");
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
            <a href="/ayuda" className="flex items-center gap-3 px-4 py-2 rounded text-sm font-bold bg-primary text-white">
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
        <h2 className="text-3xl font-bold mb-6">Centro de Ayuda</h2>

        <section className="mb-8 bg-white dark:bg-gray-900/50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Preguntas Frecuentes</h3>
          <ul className="space-y-3">
            <li>
              <b>¿Cómo puedo agendar una visita?</b><br />
              Desde el detalle de una propiedad, seleccioná “Agendar visita” y elegí día y hora.
            </li>
            <li>
              <b>¿Dónde veo mis propiedades guardadas?</b><br />
              En el menú lateral, hacé clic en “❤️ Propiedades guardadas”.
            </li>
            <li>
              <b>¿Puedo modificar mis datos de perfil?</b><br />
              Sí, ingresá a “👤 Perfil” y seleccioná “Editar perfil”.
            </li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-900/50 p-6 rounded-lg shadow-md max-w-xl">
          <h3 className="text-xl font-semibold mb-4">Contacto directo</h3>
          {enviado ? (
            <p className="text-green-600 font-medium">
              ✅ Tu mensaje fue enviado. Pronto recibirás una respuesta.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <textarea
                className="border rounded-lg p-3"
                placeholder="Escribí tu consulta o problema..."
                rows={4}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-80"
              >
                Enviar consulta
              </button>
            </form>
          )}
        </section>
      </main>
    </div>
  );
}
