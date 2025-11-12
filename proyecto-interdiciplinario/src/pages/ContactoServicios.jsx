import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import necesario

export default function ContactoServicios() {
  const navigate = useNavigate(); // ✅ Hook declarado dentro del componente

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-black dark:text-white">
      <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
        {/* HEADER */}
        <header className="border-b border-black/10 dark:border-white/10 px-4 md:px-8 lg:px-16">
          <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <img
                src={"./logo_remax.png"}
                alt="Re/Max Logo Globo"
                className="h-10 w-auto"
              />
              <h2 className="text-xl font-bold">Re/Max</h2>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium hover:text-primary" href="#">
                Comprar
              </a>
              <a className="text-sm font-medium hover:text-primary" href="#">
                Vender
              </a>
              <a className="text-sm font-medium hover:text-primary" href="#">
                Alquilar
              </a>
              <a className="text-sm font-medium hover:text-primary" href="#">
                Asesoría
              </a>
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:opacity-80">
                Contáctanos
              </button>
            </nav>

            <button className="md:hidden">
              <span className="material-symbols-outlined">menu</span>
            </button>
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
                  onClick={() => navigate("/")} // ✅ Navegación funcionando
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
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtXTOx0_S_WNqxtw1N9kY79KLntDqYqecysTimwkQlqEP-vxsKWepgfUq1Wyb1W0JNM3cv33aBbv4LbEi0JvokXWelBi1_HomMZofJCHP-odDpXxC0Oz5Zs3ACw5bZQUVV4YDNg0UvwdIENoABVckaqNMzmqI2VpXn4wvkIJYoumlr4o05XMVRk_3HnVML1HLwaTdybme8EUTtVccI2IaS70JJHnjMzGrx8HSsmT6UCcswiUJHHjIjSbsEtsN_1kXVflM5bzt-eg",
                    title: "Venta rápida y eficiente",
                    text: "Gracias a Re/Max, vendí mi propiedad en tiempo récord y al mejor precio del mercado. Su estrategia fue clave.",
                  },
                  {
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzjkV1M0shcRfAkTTa8Zij48W42q5TzPLYgKtXJP4-hVmNrTBjBGxNAXjYJGc_7lSPyRz9zDo12xQ34DcSm1TI8CLyf9JN9AUq9FvRuulFysIWFkvJ6SxqTLVfVXGkEzh2LLtQRxTCC82SSyV37rYU0ScagM72cWv0GVe30Zv17BuMRsu9bdxSFs8nG-pTG-J4UvB3x2c85X6sQUUtC08nCr2SLO7MjD8ZSMsp07wO-zd0ffkEnv9AJG4_Jzsj4-vJYf_9K_RtOw",
                    title: "Encontré el lugar perfecto para mi familia",
                    text: "Re/Max me guió en cada paso del proceso de alquiler. Encontré un hogar que superó mis expectativas.",
                  },
                ].map((t, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div
                      className="aspect-square w-full rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url(${t.img})` }}
                    ></div>
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
                  className="mb-4 aspect-video w-full rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiByEU8KmF5Hoage7N7IKAkRDpLRh4xGJ80MBa8wpUX7bU2YO8TtOkxIhEmymNG_Tq03STKU5-64VizRxzg0X66I4wWQ5kN81uS966W7_wLzcAQVg3ngQoOF-GMW5gq70AcYZ7RNcXIk2ai7FFoaFXB4P8AOKuR-NjHqXI14kJRUrI7ic6gGL8zsq6omD7x7dcmeoWtH653rIzkGRr1H22FtIsY6L3YeCHp3EXLkGRmtWF2yhJ5L8Btl_jIAiGS331y1M_xBTprQ')",
                  }}
                ></div>
                <p className="font-semibold">Re/Max España</p>
                <p className="text-black/60 dark:text-white/60">
                  Calle de Velázquez, 150, 28002 Madrid, España
                </p>
                <p className="mt-2 text-black/60 dark:text-white/60">
                  Teléfono: +34 91 563 45 67
                </p>
                <p className="text-black/60 dark:text-white/60">
                  Correo electrónico: info@remax.es
                </p>
              </div>
            </section>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="mt-auto border-t border-black/10 bg-white dark:border-white/10 dark:bg-black/20">
          <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-16 text-center">
            <p className="text-sm text-black/60 dark:text-white/60">
              © 2024 Re/Max España. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
