import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contactanos() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mensaje enviado:", form);
    alert("Tu mensaje fue enviado correctamente.");
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
    <div className="max-w-3xl mx-auto py-12 px-4 font-display">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contáctanos</h2>

      <div className="space-y-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block font-medium mb-1">Nombre</label>
            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Mensaje</label>
            <textarea
              rows="5"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
          >
            Enviar Mensaje
          </button>
        </form>

        {/* INFO EXTRA */}
        <div className="text-center mt-10 space-y-3 text-gray-700 dark:text-gray-300">
          <p><strong>Email:</strong> remax.com.ar</p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              className="text-blue-600"
              href="https://wa.me/5491112345678"
              target="_blank"
            >
              +54 9 11 1234-5678
            </a>
          </p>
          <p><strong>Ubicación:</strong> Argentina, Buenos Aires, Villa Urquiza </p>
        </div>
      </div>
    </div>
    </div>
  );
}
