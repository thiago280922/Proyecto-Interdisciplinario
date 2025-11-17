import agentes from "../data/agentes";
import { Link } from "react-router-dom";

export default function Agentes() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-black dark:text-white">

      {/* HEADER */}
      <header className="border-b border-black/10 dark:border-white/10 px-4 md:px-8 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <img src="./logo_remax.png" alt="Re/Max" className="h-10 w-auto" />
              <h2 className="text-xl font-bold">Re/Max</h2>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/contacto" className="text-sm font-medium hover:text-primary">Contacto y Servicios</a>
            <a href="/comprar" className="text-sm font-medium hover:text-primary">Comprar</a>
            <a href="/vender" className="text-sm font-medium hover:text-primary">Vender</a>
            <a href="/alquilar" className="text-sm font-medium hover:text-primary">Alquilar</a>
            <a href="/asesoria" className="text-sm font-medium hover:text-primary">Asesoría</a>
            <a href="/contactanos" className="text-sm font-medium hover:text-primary">Contactanos</a>
            <a href="/agentes" className="text-sm font-medium hover:text-primary">Agentes</a>
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
              "url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative">
          <h1 className="text-5xl font-black">Conocé a Nuestros Agentes</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Profesionales capacitados para asesorarte en cada paso.
          </p>
        </div>
      </section>

      {/* LISTA DE AGENTES */}
      <div className="max-w-6xl mx-auto py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {agentes.map((a) => (
          <div key={a.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 text-center">
            <img
              src={a.img}
              alt={a.nombre}
              className="rounded-full h-40 w-40 object-cover mx-auto"
            />
            <h3 className="mt-4 text-2xl font-bold">{a.nombre}</h3>
            <p className="text-primary font-medium">{a.especialidad}</p>

            <p className="text-gray-500 mt-3">{a.descripcion}</p>

            <div className="mt-4 text-sm">
              <p><span className="font-semibold">Email:</span> {a.email}</p>
              <p><span className="font-semibold">Tel:</span> {a.telefono}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
