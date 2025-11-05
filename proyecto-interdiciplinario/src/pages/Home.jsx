import React from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full font-display bg-background-light text-gray-800 dark:bg-background-dark dark:text-gray-200">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <svg
                className="h-8 w-auto text-red-600"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                  fill="#0054a4"
                ></path>
                <path
                  d="M35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z"
                  fill="#d40026"
                ></path>
              </svg>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Re/Max</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium hover:text-primary" href="#">
                Comprar
              </a>
              <a className="text-sm font-medium hover:text-primary" href="#">
                Alquilar
              </a>
              <a className="text-sm font-medium hover:text-primary" href="#">
                Vender
              </a>
              <a className="text-sm font-medium hover:text-primary" href="#">
                Agentes
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <a className="text-sm font-medium hover:text-primary" href="#">
                Iniciar Sesión
              </a>
              <a
                className="rounded bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90"
                href="#"
              >
                Registrarse
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <div className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARZp-6dH-XALjaS4iM4sxBsCJMa6XTIuGWupwYUlIiUdkL28TtL9xB5W0Q7eot5WGl-fHbWDqYKaFJl1uQMzTc8VIQNsU6sCpwByd4HV9Ym83p-TgruIVFBybdYMMxBAtImJ86PyMVAEZKB9yhL9r0cdvHygrWurcahrXIoy5rl8rRlcEkgWzuuL2EuMxE8nUMIv-pkCtfCfUjjGItkxlUDXBPFu2a6NHCJNHFKXugpI4N0B95_P7tYduNYEENUDpUQo59CA_Wng")',
            }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-48 text-center text-white">
            <h1 className="text-5xl font-black">Encuentra tu hogar ideal</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Explora las mejores propiedades en el mercado con nuestra
              plataforma innovadora y fácil de usar.
            </p>

            <form className="mt-8 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 bg-white/10 backdrop-blur-lg p-2 rounded-lg border border-white/20">
              <input
                type="text"
                placeholder="Ubicación (Ciudad, Barrio...)"
                className="col-span-1 md:col-span-2 bg-transparent border-0 focus:ring-0 placeholder-gray-300 text-white"
              />
              <select className="bg-transparent border-0 focus:ring-0 text-white">
                <option>Tipo de propiedad</option>
                <option>Casa</option>
                <option>Apartamento</option>
                <option>Terreno</option>
              </select>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition"
              >
                🔍 Buscar
              </button>
            </form>
          </div>
        </div>

        {/* PROPIEDADES DESTACADAS */}
        <section className="bg-background-light dark:bg-background-dark py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Propiedades Destacadas
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {[
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuefv_KPFKsg34u-kVRjsdxSCkyH58lEiclOPfOR3IZJDf9WMLibF7Y3obp5kSEUEWOMGKzndpw9J0cEnbvNLENp6VvdE2YR7XtTfAfZ29vbaCeTAuqgAhLGJGCtRIyVZQMIT17p7po_r1quRNCbWb_aAqbj7lSunXJhZAQyMOCIfbYlu639nM7vRWYRIPIlhU7JNo-IdgWBvCNSXdbl_m20UHjkZ_Tof8-Dj1vQGF2_e3-y0cuHFR6LZcraDbWmxqUkkuZ9YjNA",
                  titulo: "Casa moderna con piscina",
                  lugar: "Ciudad de Esperanza",
                  precio: "$550,000",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA70bMJA0MLrDSZ8nK7FxceNHv1_g30FYvkXiM2Hg_Yr5QFE6_gztEuHyqYnbL3J9f28eX7W8etyVTPZVJpNdzv6FhPJ_3l7X6aMKAsrSFclkwJ8Fn4h3qV0NUV5kTq3WdDc-Ij0XQDarVCMTu4aVLbWtS81uRUvoq58LC0Vvokc19TX8B5k20UvPbQovj6FI4y76IGcCcLgJgDb3BBtsgm5bTVcEzsz1tNEAfcM24STCQpSZA8fO7UE8r-_oq4xbC5ceJ9VzKRcg",
                  titulo: "Apartamento de lujo en el centro",
                  lugar: "Distrito Financiero",
                  precio: "$1,200,000",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEDJ5Pw_HALVYTgDQ82dti-Aqxt-bgzavTJPEpQHfekURlD26AeHuqKono4jYfRCkX254t2gm1YYASHrrsaBkrj1RLwL5zBR7fNmMTOdN6ZvNF-3d2sMOiMdwBp7e8Dq8-AW_X3rz-UGjEJ_2cjvu9UrGo90w5AtEM_Vx2EZaLdfJeyGkjHsZ0W34531VgfxGAy3cPBG1RWLHb6y1dPiTe_817CHy7zrAZMj7uSE4KQ7SSqIwkzCbo1eZanS2A0-L_ClEOQlmyXA",
                  titulo: "Cabaña acogedora en las afueras",
                  lugar: "Villa Tranquila",
                  precio: "$320,000",
                },
              ].map((prop, i) => (
                <div
                  key={i}
                  className="group bg-white dark:bg-gray-900/50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <img
                    src={prop.img}
                    alt={prop.titulo}
                    className="h-80 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {prop.titulo}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{prop.lugar}</p>
                    <p className="mt-2 text-xl font-bold text-primary">
                      {prop.precio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
