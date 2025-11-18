import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import necesario
import { Link } from "react-router-dom";


export default function ContactoServicios() {
  const navigate = useNavigate(); // ✅ Hook declarado dentro del componente

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-black dark:text-white">
      <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
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

        {/* MAIN */}
        <main className="px-4 py-10 md:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            {/* HERO */}
            <section className="mb-16">
              <div
                className="flex min-h-[480px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center p-8 text-center text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAODJSjb1ErMp90yA3KK2xYNR8SSNRXxcAkPpSmsHHJC6eI2wNms4D-W7n6AkZsiezZRq7qoH1hC3E_lJGzaCJ-cpQpsfWM1ppWaUin8ekABS06VHW8WoOjdlu55VUuS1h-YDcfvdI87R4CBzk1XyJHEwIIYL15ES5moDDMWEk-CPgprH7nam9X28XDGaVwgsSp8zI5rJPjiFIkIyRVp36Nee-GW5BEXiS3MViVoXCF-VfJaD3N4Pl7JpyJ1muOTgBFBTrJfFk_NQ')",
                }}
              >
                <h1 className="text-4xl font-black md:text-5xl">
                  Encuentra tu lugar ideal con Re/Max
                </h1>
                <p className="max-w-xl text-base md:text-lg">
                  Tu hogar perfecto te espera. Explora nuestras opciones y haz
                  realidad tus sueños.
                </p>
                <button
                  onClick={() => navigate("/comprar")} // ✅ Navegación funcionando
                  className="rounded-lg bg-primary px-6 py-3 text-base font-bold text-white hover:opacity-80"
                >
                  Explorar propiedades
                </button>
              </div>
            </section>

            {/* SERVICIOS */}
            <section className="mb-16 text-center">
              <h2 className="text-3xl font-bold md:text-4xl mb-2">
                Servicios Inmobiliarios Integrales
              </h2>
              <p className="max-w-2xl mx-auto text-black/60 dark:text-white/60 mb-8">
                Ofrecemos soluciones personalizadas para cada necesidad, desde
                la compra hasta la venta y el alquiler de propiedades.
              </p>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "Compra",
                    text: "Encuentra la casa de tus sueños con nuestra amplia selección de propiedades.",
                  },
                  {
                    title: "Venta",
                    text: "Vende tu propiedad al mejor precio con nuestra experiencia y alcance.",
                  },
                  {
                    title: "Alquiler",
                    text: "Descubre opciones de alquiler que se adaptan a tu estilo de vida y presupuesto.",
                  },
                  {
                    title: "Asesoría",
                    text: "Obtén asesoría experta para tomar decisiones informadas en el mercado inmobiliario.",
                  },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-4 rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black/20"
                  >
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontSize: 32 }}
                    >
                      {s.icon}
                    </span>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="text-sm text-black/60 dark:text-white/60">
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* TESTIMONIOS */}
            <section className="mb-16">
              <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
                Testimonios de Clientes
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    img: "/testimonio.jpg",
                    title: "Excelente servicio y profesionalismo",
                    text: "El equipo de Re/Max me ayudó a encontrar la casa perfecta. Su atención y profesionalismo fueron excepcionales.",
                  },
                  {
                    img: "/testimonio.jpg",
                    title: "Venta rápida y eficiente",
                    text: "Gracias a Re/Max, vendí mi propiedad en tiempo récord y al mejor precio del mercado. Su estrategia fue clave.",
                  },
                  {
                    img: "/testimonio.jpg",
                    title: "Encontré el lugar perfecto para mi familia",
                    text: "Re/Max me guió en cada paso del proceso de alquiler. Encontré un hogar que superó mis expectativas.",
                  },
                ].map((t, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div
                      className="aspect-square w-full rounded-lg overflow-hidden" // Contenedor cuadrado
                    >
                      <img
                        src={t.img}
                        alt={`Foto de ${t.title}`}
                        className="w-full h-full object-cover" // La imagen llena y se adapta
                      />
                    </div>
                    {/* TEXTO DE LA DESCRIPCIÓN (sin cambios) */}
                    <div>
                      <h3 className="font-bold">{t.title}</h3>
                      <p className="text-sm text-black/60 dark:text-white/60">
                        "{t.text}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CONTACTO */}
            <section className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                  Contáctanos
                </h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full rounded-lg border-black/10 bg-white p-3 dark:border-white/10 dark:bg-black/20"
                  />
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full rounded-lg border-black/10 bg-white p-3 dark:border-white/10 dark:bg-black/20"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full rounded-lg border-black/10 bg-white p-3 dark:border-white/10 dark:bg-black/20"
                  />
                  <textarea
                    rows="5"
                    placeholder="Mensaje"
                    className="w-full rounded-lg border-black/10 bg-white p-3 dark:border-white/10 dark:bg-black/20"
                  ></textarea>
                  <button className="w-full md:w-auto rounded-lg bg-primary px-6 py-3 font-bold text-white hover:opacity-80">
                    Enviar Mensaje
                  </button>
                </form>
              </div>

              <div>
                <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                  Nuestra Ubicación
                </h2>
                <div
                  // Quitamos 'bg-cover bg-center' del div, ya no es un fondo.
                  className="mb-4 aspect-video w-full rounded-lg overflow-hidden" 
                >
                  <img
                    src={"/ubicacion.png"}
                    alt="Mapa de Ubicación de Re/Max" // Cambié el alt
                    // Aplicamos clases para que la imagen llene el contenedor
                    className="w-full h-full object-cover" 
                  />
                </div>
                <p className="font-semibold">Re/Max España</p>
                <p className="text-black/60 dark:text-white/60">
                  Bauness 2800, C1431 Cdad. Autónoma de Buenos Aires
                </p>
                <p className="mt-2 text-black/60 dark:text-white/60">
                  Teléfono: +54 011 2473-7553
                </p>
                <p className="text-black/60 dark:text-white/60">
                  Correo electrónico: remax.com.ar
                </p>
              </div>
            </section>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="mt-auto border-t border-black/10 bg-white dark:border-white/10 dark:bg-black/20">
          <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-16 text-center">
            <p className="text-sm text-black/60 dark:text-white/60">
              © 2025 Re/Max Argentina. Todos los derechos reservados.
              Thiago Casiano, Brunella Figallo y Morena Gonzalez
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
