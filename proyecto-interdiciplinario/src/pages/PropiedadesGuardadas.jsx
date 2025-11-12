import React, { useEffect, useState } from "react";

export default function PropiedadesGuardadas() {
  const [guardadas, setGuardadas] = useState([]);

  // Cargar propiedades guardadas del localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("propiedadesGuardadas")) || [];
    setGuardadas(data);
  }, []);

  // 🗑️ Función para eliminar propiedad guardada
  const eliminarPropiedad = (id) => {
    const nuevas = guardadas.filter((prop) => prop.id !== id);
    setGuardadas(nuevas);
    localStorage.setItem("propiedadesGuardadas", JSON.stringify(nuevas));
  };

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
      {/* SIDEBAR */}
      <aside className="w-72 bg-white dark:bg-background-dark border-r border-gray-200 dark:border-gray-800 flex-col justify-between hidden lg:flex">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-8">
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
            <a href="/ayuda" className="flex items-center gap-3 px-4 py-2 rounded text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20">
              ❓ <span>Ayuda</span>
            </a>
            <a href="/configuracion" className="flex items-center gap-3 px-4 py-2 rounded text-sm font-bold bg-primary text-white">
              ⚙️ <span>Configuración</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 px-6 py-8 md:px-8 lg:px-12">
        <h2 className="text-3xl font-bold mb-6">Propiedades guardadas</h2>

        {guardadas.length === 0 ? (
          <p className="text-gray-500 text-lg">
            No tenés propiedades guardadas todavía 💔
          </p>
        ) : (
          <div className="space-y-8">
            {guardadas.map((prop) => {
              const imagen =
                prop.img && prop.img.trim() !== ""
                  ? prop.img
                  : "https://via.placeholder.com/600x400?text=Imagen+no+disponible";

              return (
                <div
                  key={prop.id}
                  className="flex flex-col md:flex-row items-start gap-6 bg-white dark:bg-gray-900/40 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={imagen}
                    alt={prop.titulo || "Propiedad"}
                    className="w-full md:w-1/3 h-48 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mt-1">
                      {prop.titulo || "Propiedad sin título"}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      {prop.lugar || "Ubicación no disponible"} ·{" "}
                      {prop.precio || "Precio no especificado"}
                    </p>

                    {/* 🗑️ Botón para eliminar */}
                    <button
                      onClick={() => eliminarPropiedad(prop.id)}
                      className="mt-4 inline-flex items-center gap-2 rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition"
                    >
                      🗑️ Eliminar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
