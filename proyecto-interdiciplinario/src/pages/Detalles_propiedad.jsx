import { useParams } from "react-router-dom";
import propiedades from "../data/propiedades";

export default function DetallePropiedad() {
  const { id } = useParams();

  const propiedad = propiedades.find((p) => p.id === Number(id));

  if (!propiedad) {
    return <div className="p-10 text-red-500">Propiedad no encontrada</div>;
  }

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">

      {/* SIDEBAR */}
      <aside className="w-72 bg-white dark:bg-background-dark border-r border-gray-200 dark:border-gray-800 hidden lg:flex flex-col justify-between">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-8">Re/Max</h1>
          <nav className="flex flex-col gap-2">
            <a href="/" className="flex items-center gap-3 px-4 py-2 rounded hover:bg-primary/10 dark:hover:bg-primary/20">🏠 Inicio</a>
            <a href="/guardadas" className="flex items-center gap-3 px-4 py-2 rounded hover:bg-primary/10 dark:hover:bg-primary/20">❤️ Guardadas</a>
            <a href="/reservas" className="flex items-center gap-3 px-4 py-2 rounded hover:bg-primary/10 dark:hover:bg-primary/20">📅 Reservas</a>
            <a href="/perfil" className="flex items-center gap-3 px-4 py-2 rounded hover:bg-primary/10 dark:hover:bg-primary/20">👤 Perfil</a>
          </nav>
        </div>

        <div className="p-6">
          <nav className="flex flex-col gap-1">
            <a href="/ayuda" className="flex items-center gap-3 px-4 py-2 rounded hover:bg-primary/10 dark:hover:bg-primary/20">❓ Ayuda</a>
            <a href="/configuracion" className="flex items-center gap-3 px-4 py-2 rounded hover:bg-primary/10 dark:hover:bg-primary/20">⚙️ Configuración</a>
          </nav>
        </div>
      </aside>

      {/* CONTENIDO */}
      <main className="flex-1 px-6 py-8 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{propiedad.titulo}</h2>

          <img
            src={propiedad.img}
            alt={propiedad.titulo}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {propiedad.descripcion}
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            📍 {propiedad.lugar}
            <br />
            💰 Precio: {propiedad.precio}
            <br />
            📐 Superficie: {propiedad.superficie}
            <br />
            🛏️ Habitaciones: {propiedad.habitaciones}
            <br />
            🛁 Baños: {propiedad.baños}
          </p>
        </div>
      </main>
    </div>
  );
}
