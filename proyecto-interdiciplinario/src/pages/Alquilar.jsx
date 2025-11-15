import propiedadesAlquiler from "../data/propiedadesAlquiler";
import { Link } from "react-router-dom";


export default function Alquilar() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-black dark:text-white">

    {/* HEADER */}
      <header className="border-b border-black/10 dark:border-white/10 px-4 md:px-8 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
                <img
                    src="./logo_remax.png"
                    alt="Re/Max"
                    className="h-10 w-auto"
                />
                <h2 className="text-xl font-bold">Re/Max</h2>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/contacto" className="text-sm font-medium hover:text-primary">Contacto y Servicios</a>
            <a className="text-sm font-medium hover:text-primary" href="/comprar">Comprar</a>
            <a className="text-sm font-medium hover:text-primary" href="/vender">Vender</a>
            <a className="text-sm font-medium hover:text-primary" href="/alquilar">Alquilar</a>
            <a className="text-sm font-medium hover:text-primary" href="/asesoria">Asesoría</a>
            <a className="text-sm font-medium hover:text-primary" href="/contactanos">Contactanos</a>
            <a className="text-sm font-medium hover:text-primary" href="/agentes">Agentes</a>

          </nav>

          <div className="flex items-center gap-4">
              <a href="/login" className="rounded bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90">
              Iniciar Sesión
            </a>
            <a href="/registro" className="rounded bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90">
              Regístrate
            </a>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="relative text-center text-white py-32 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative">
          <h1 className="text-5xl font-black">Propiedades en Alquiler</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Encontrá casas y departamentos al mejor precio.
          </p>
        </div>
      </section>

      {/* LISTADO */}
      <div className="max-w-6xl mx-auto py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {propiedadesAlquiler.map((p) => (
          <div key={p.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow p-5">
            <img src={p.img} className="rounded-xl h-56 w-full object-cover" />
            <h3 className="mt-4 text-2xl font-bold">{p.titulo}</h3>
            <p className="text-gray-500">{p.lugar}</p>
            <p className="mt-2 text-primary text-xl font-black">
              ${p.precio.toLocaleString("es-AR")} / mes
            </p>
            <p className="text-sm mt-1">
              {p.habitaciones} hab • {p.baños} baños • {p.amueblado ? "Amueblado" : "Sin muebles"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
