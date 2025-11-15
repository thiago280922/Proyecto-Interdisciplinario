import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import propiedades from "../data/propiedades";
import { Link } from "react-router-dom";


export default function Comprar() {
  const navigate = useNavigate();

  // ⭐ FILTROS
  const [filtros, setFiltros] = useState({
    ubicacion: "",
    precioMax: "",
    tipo: "",
    ambientes: "",
  });

  // ⭐ FILTRAR PROPIEDADES
  const resultado = propiedades.filter((p) => {
    return (
      (filtros.ubicacion === "" ||
        p.lugar.toLowerCase().includes(filtros.ubicacion.toLowerCase())) &&
      (filtros.precioMax === "" || p.precio <= Number(filtros.precioMax)) &&
      (filtros.tipo === "" || p.tipo === filtros.tipo) &&
      (filtros.ambientes === "" ||
        p.habitaciones >= Number(filtros.ambientes))
    );
  });

  // ⭐ GUARDAR
  const guardarPropiedad = (prop) => {
    const guardadas =
      JSON.parse(localStorage.getItem("propiedadesGuardadas")) || [];

    if (guardadas.some((p) => p.id === prop.id)) {
      alert("⚠️ Esta propiedad ya está guardada");
      return;
    }

    const nuevas = [...guardadas, prop];
    localStorage.setItem("propiedadesGuardadas", JSON.stringify(nuevas));
    alert("❤️ Propiedad guardada");
  };

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
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600")',
          }}
        ></div>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center text-white py-32 px-4">
          <h1 className="text-5xl font-black">Propiedades en Venta</h1>
          <p className="text-lg mt-3 max-w-2xl mx-auto">
            Descubre las mejores oportunidades del mercado inmobiliario.
          </p>
        </div>
      </section>

      {/* FILTROS */}
      <section className="bg-white dark:bg-gray-900 py-10">
        <div className="container mx-auto px-6 mb-10 p-6 rounded-lg shadow">

          <h3 className="text-xl font-bold mb-4">🔍 Búsqueda Avanzada</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Ubicación */}
            <input
              type="text"
              placeholder="Ubicación"
              className="p-2 border rounded"
              value={filtros.ubicacion}
              onChange={(e) =>
                setFiltros({ ...filtros, ubicacion: e.target.value })
              }
            />

            {/* Precio máximo */}
            <input
              type="number"
              placeholder="Precio máximo"
              className="p-2 border rounded"
              value={filtros.precioMax}
              onChange={(e) =>
                setFiltros({ ...filtros, precioMax: e.target.value })
              }
            />

            {/* Tipo */}
            <select
              className="p-2 border rounded"
              value={filtros.tipo}
              onChange={(e) =>
                setFiltros({ ...filtros, tipo: e.target.value })
              }
            >
              <option value="">Tipo</option>
              <option value="casa">Casa</option>
              <option value="departamento">Departamento</option>
              <option value="cabaña">Cabaña</option>
            </select>

            {/* Ambientes */}
            <select
              className="p-2 border rounded"
              value={filtros.ambientes}
              onChange={(e) =>
                setFiltros({ ...filtros, ambientes: e.target.value })
              }
            >
              <option value="">Ambientes</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
        </div>
      </section>

      {/* LISTA DE RESULTADOS */}
      <section className="bg-background-light dark:bg-background-dark py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {resultado.map((prop) => (
            <div
              key={prop.id}
              className="group bg-white dark:bg-gray-900/50 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition cursor-pointer"
            >
              <img
                src={prop.img}
                alt={prop.titulo}
                className="h-80 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold">{prop.titulo}</h3>
                <p className="text-sm text-gray-500">{prop.lugar}</p>
                <p className="text-xl font-bold text-primary mt-1">
                  ${prop.precio.toLocaleString()}
                </p>

                <button
                  onClick={() => guardarPropiedad(prop)}
                  className="mt-3 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
                >
                  ❤️ Guardar propiedad
                </button>

                <button
                  onClick={() => navigate(`/propiedad/${prop.id}`)}
                  className="mt-3 ml-2 text-primary hover:underline"
                >
                  Ver detalles →
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
