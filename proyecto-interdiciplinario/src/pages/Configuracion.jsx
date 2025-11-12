import React, { useEffect, useState } from "react";

export default function Configuracion() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [idioma, setIdioma] = useState("es");

  // Cargar configuraciones guardadas
  useEffect(() => {
    const dark = localStorage.getItem("modoOscuro") === "true";
    const lang = localStorage.getItem("idioma") || "es";
    setModoOscuro(dark);
    setIdioma(lang);

    document.documentElement.classList.toggle("dark", dark);
  }, []);

  // Cambiar tema
  const toggleTema = () => {
    const nuevoModo = !modoOscuro;
    setModoOscuro(nuevoModo);
    localStorage.setItem("modoOscuro", nuevoModo);
    document.documentElement.classList.toggle("dark", nuevoModo);
  };

  // Cambiar idioma
  const cambiarIdioma = (nuevo) => {
    setIdioma(nuevo);
    localStorage.setItem("idioma", nuevo);
  };

  // Cerrar sesión
  const cerrarSesion = () => {
    if (window.confirm("¿Seguro que querés cerrar sesión?")) {
      localStorage.clear();
      alert("Sesión cerrada correctamente.");
      window.location.href = "/";
    }
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
            <a href="/configuracion" className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-bold bg-primary text-white">
              ⚙️ <span>Configuración</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* === CONTENIDO PRINCIPAL === */}
      <main className="flex-1 px-6 py-8 md:px-8 lg:px-12">
        <h2 className="text-3xl font-bold mb-6">Configuración del sistema</h2>

        <div className="bg-white dark:bg-gray-900/50 p-6 rounded-lg shadow-md max-w-xl space-y-6">
          {/* Cambiar tema */}
          <div>
            <h3 className="text-lg font-bold mb-2">🌗 Modo de visualización</h3>
            <button
              onClick={toggleTema}
              className="bg-primary text-white px-5 py-2 rounded-lg hover:opacity-80"
            >
              {modoOscuro ? "Cambiar a modo claro ☀️" : "Cambiar a modo oscuro 🌙"}
            </button>
          </div>

          {/* Idioma */}
          <div>
            <h3 className="text-lg font-bold mb-2">🌐 Idioma</h3>
            <select
              value={idioma}
              onChange={(e) => cambiarIdioma(e.target.value)}
              className="border rounded-lg p-2 w-full dark:bg-gray-800"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Cerrar sesión */}
          <div>
            <h3 className="text-lg font-bold mb-2">🔒 Sesión</h3>
            <button
              onClick={cerrarSesion}
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:opacity-80"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
