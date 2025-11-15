import { useState } from "react";
import { Link } from "react-router-dom";


export default function Asesoria() {
  const [formularioVisible, setFormularioVisible] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState("");

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const abrirFormulario = (servicio) => {
    setServicioSeleccionado(servicio);
    setFormularioVisible(true);
  };

  const enviarSolicitud = (e) => {
    e.preventDefault();

    const solicitudes =
      JSON.parse(localStorage.getItem("solicitudesAsesoria")) || [];

    solicitudes.push({
      servicio: servicioSeleccionado,
      ...form,
      fecha: new Date().toLocaleString(),
    });

    localStorage.setItem("solicitudesAsesoria", JSON.stringify(solicitudes));

    alert("Tu solicitud fue enviada. Un asesor te contactará pronto.");

    setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
    setFormularioVisible(false);
  };

  

  const servicios = [
    {
      titulo: "Asesoría para Comprar",
      desc: "Te ayudamos a encontrar la propiedad ideal y entender todo el proceso.",
    },
    {
      titulo: "Asesoría para Vender",
      desc: "Tasación, estrategia de venta y acompañamiento completo.",
    },
    {
      titulo: "Asesoría para Alquilar",
      desc: "Buscamos opciones seguras y te guiamos en el proceso.",
    },
    {
      titulo: "Tasación Profesional",
      desc: "Estimación real del valor de tu propiedad.",
    },
    {
      titulo: "Asesoría Legal",
      desc: "Contratos, documentación y normativa inmobiliaria.",
    },
    {
      titulo: "Asesoría Financiera",
      desc: "Opciones de crédito, hipotecas y planificación.",
    },
  ];

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
              "url('https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative">
          <h1 className="text-5xl font-black">Asesoría Inmobiliaria</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Elegí el tipo de asesoría que necesitás e iniciá tu consulta con un profesional certificado.
          </p>
        </div>
      </section>

      {/* TARJETAS */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-2">{s.titulo}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{s.desc}</p>
              <button
                className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:opacity-90"
                onClick={() => abrirFormulario(s.titulo)}
              >
                Consultar ahora
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL FORMULARIO */}
      {formularioVisible && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg max-w-md w-full shadow-xl">

            <h2 className="text-2xl font-bold mb-4 text-center">
              {servicioSeleccionado}
            </h2>

            <form className="flex flex-col gap-4" onSubmit={enviarSolicitud}>
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
              />

              <textarea
                name="mensaje"
                placeholder="Contanos qué necesitás..."
                rows="3"
                value={form.mensaje}
                onChange={handleChange}
                className="p-3 border rounded-lg dark:bg-gray-800"
              ></textarea>

              <button className="bg-primary text-white font-bold py-2 rounded-lg hover:opacity-90">
                Enviar consulta
              </button>
            </form>

            <button
              className="mt-4 w-full text-center text-sm text-red-500 hover:underline"
              onClick={() => setFormularioVisible(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
