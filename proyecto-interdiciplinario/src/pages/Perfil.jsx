import React, { useState, useEffect } from "react";

export default function Perfil() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const [editando, setEditando] = useState(false);

  // Cargar datos del usuario desde localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("usuario")) || {
      nombre: "Invitado",
      email: "sin_email@remax.com",
      telefono: "",
    };
    setUsuario(data);
  }, []);

  // Guardar cambios
  const guardarCambios = () => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    setEditando(false);
    alert("✅ Perfil actualizado correctamente.");
  };

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
      {/* === SIDEBAR === */}
      <aside className="w-72 bg-white dark:bg-background-dark border-r border-gray-200 dark:border-gray-800 flex-col justify-between hidden lg:flex">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Re/Max</h1>
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
            <a href="/perfil" className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-bold bg-primary text-white">
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
        <h2 className="text-3xl font-bold mb-6">Perfil del Usuario</h2>

        <div className="bg-white dark:bg-gray-900/50 p-6 rounded-lg shadow-md max-w-xl">
          {!editando ? (
            <>
              <p className="text-lg mb-4"><b>Nombre:</b> {usuario.nombre}</p>
              <p className="text-lg mb-4"><b>Email:</b> {usuario.email}</p>
              <p className="text-lg mb-4"><b>Teléfono:</b> {usuario.telefono || "No especificado"}</p>

              <button
                onClick={() => setEditando(true)}
                className="bg-primary text-white px-5 py-2 rounded-lg hover:opacity-80"
              >
                Editar perfil
              </button>
            </>
          ) : (
            <>
              <label className="block text-sm font-semibold mb-1">Nombre</label>
              <input
                type="text"
                value={usuario.nombre}
                onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
                className="border rounded-lg p-2 w-full mb-3 dark:bg-gray-800"
              />

              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                value={usuario.email}
                onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
                className="border rounded-lg p-2 w-full mb-3 dark:bg-gray-800"
              />

              <label className="block text-sm font-semibold mb-1">Teléfono</label>
              <input
                type="text"
                value={usuario.telefono}
                onChange={(e) => setUsuario({ ...usuario, telefono: e.target.value })}
                className="border rounded-lg p-2 w-full mb-4 dark:bg-gray-800"
              />

              <div className="flex gap-3">
                <button
                  onClick={guardarCambios}
                  className="bg-green-600 text-white px-5 py-2 rounded-lg hover:opacity-80"
                >
                  Guardar
                </button>
                <button
                  onClick={() => setEditando(false)}
                  className="bg-gray-400 text-white px-5 py-2 rounded-lg hover:opacity-80"
                >
                  Cancelar
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
