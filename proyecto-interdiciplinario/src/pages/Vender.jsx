import { useState } from "react";
import { Link } from "react-router-dom";


export default function Vender() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipo: "",
    ubicacion: "",
    precio: "",
    superficie: "",
    ambientes: "",
    descripcion: "",
    imagen: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviarSolicitud = (e) => {
    e.preventDefault();

    // Guardar en sistema (localStorage por ahora)
    const solicitudes =
      JSON.parse(localStorage.getItem("solicitudesVenta")) || [];

    solicitudes.push({
      ...form,
      fecha: new Date().toLocaleDateString(),
    });

    localStorage.setItem("solicitudesVenta", JSON.stringify(solicitudes));

    alert("📩 Tu solicitud fue enviada. Un agente te contactará pronto.");

    // Reiniciar form
    setForm({
      nombre: "",
      email: "",
      telefono: "",
      tipo: "",
      ubicacion: "",
      precio: "",
      superficie: "",
      ambientes: "",
      descripcion: "",
      imagen: "",
    });
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
      <section className="relative text-center text-white py-32 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative">
          <h1 className="text-5xl font-black">Vende tu propiedad con Re/Max</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Completá el formulario y un agente especializado te contactará para ayudarte en el proceso de venta.
          </p>
        </div>
      </section>


      {/* FORMULARIO */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Formulario de Solicitud
          </h2>

          <form className="grid grid-cols-1 gap-6" onSubmit={enviarSolicitud}>

            <input
              name="nombre"
              type="text"
              placeholder="Nombre completo"
              value={form.nombre}
              onChange={handleChange}
              className="p-3 border rounded-lg dark:bg-gray-800"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              className="p-3 border rounded-lg dark:bg-gray-800"
              required
            />

            <input
              name="telefono"
              type="text"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={handleChange}
              className="p-3 border rounded-lg dark:bg-gray-800"
              required
            />

            <select
              name="tipo"
              value={form.tipo}
              onChange={handleChange}
              className="p-3 border rounded-lg dark:bg-gray-800"
              required
            >
              <option value="">Tipo de propiedad</option>
              <option value="casa">Casa</option>
              <option value="departamento">Departamento</option>
              <option value="terreno">Terreno</option>
              <option value="cabaña">Cabaña</option>
            </select>

            <input
              name="ubicacion"
              type="text"
              placeholder="Ubicación"
              value={form.ubicacion}
              onChange={handleChange}
              className="p-3 border rounded-lg dark:bg-gray-800"
              required
            />

            <input
              name="precio"
              type="number"
              placeholder="Precio estimado"
              value={form.precio}
              onChange={handleChange}
              className="p-3 border rounded-lg dark:bg-gray-800"
            />

            <input
              name="superficie"
              type="number"
              placeholder="Superficie en m²"
              value={form.superficie}
              onChange={handleChange}
              className="p-3 border rounded-lg dark:bg-gray-800"
            />

            <input
              name="ambientes"
              type="number"
              placeholder="Cantidad de ambientes"
              value={form.ambientes}
              onChange={handleChange}
              className="p-3 border rounded-lg dark:bg-gray-800"
            />

            <textarea
              name="descripcion"
              placeholder="Descripción detallada"
              rows="4"
              value={form.descripcion}
              onChange={handleChange}
              className="p-3 border rounded-lg dark:bg-gray-800"
            ></textarea>

            <input
              name="imagen"
              type="text"
              placeholder="URL de imagen (opcional)"
              value={form.imagen}
              onChange={handleChange}
              className="p-3 border rounded-lg dark:bg-gray-800"
            />

            <button
              type="submit"
              className="bg-primary text-white font-bold py-3 rounded-lg mt-4 hover:opacity-90"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
