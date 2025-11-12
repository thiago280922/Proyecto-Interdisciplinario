import { useParams } from "react-router-dom";

export default function DetallePropiedad() {
  const { id } = useParams();

  // ✅ Propiedades con las imágenes reales que ya tenías en Home.jsx
  const propiedades = {
    1: {
      titulo: "Casa moderna con piscina",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuefv_KPFKsg34u-kVRjsdxSCkyH58lEiclOPfOR3IZJDf9WMLibF7Y3obp5kSEUEWOMGKzndpw9J0cEnbvNLENp6VvdE2YR7XtTfAfZ29vbaCeTAuqgAhLGJGCtRIyVZQMIT17p7po_r1quRNCbWb_aAqbj7lSunXJhZAQyMOCIfbYlu639nM7vRWYRIPIlhU7JNo-IdgWBvCNSXdbl_m20UHjkZ_Tof8-Dj1vQGF2_e3-y0cuHFR6LZcraDbWmxqUkkuZ9YjNA",
      descripcion:
        "Hermosa casa moderna con piscina, jardín y espacios amplios, ubicada en un barrio residencial tranquilo.",
      ubicacion: "Ciudad de Esperanza",
      precio: "$550,000",
      superficie: "250 m²",
      habitaciones: 4,
      baños: 3,
    },
    2: {
      titulo: "Apartamento de lujo en el centro",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA70bMJA0MLrDSZ8nK7FxceNHv1_g30FYvkXiM2Hg_Yr5QFE6_gztEuHyqYnbL3J9f28eX7W8etyVTPZVJpNdzv6FhPJ_3l7X6aMKAsrSFclkwJ8Fn4h3qV0NUV5kTq3WdDc-Ij0XQDarVCMTu4aVLbWtS81uRUvoq58LC0Vvokc19TX8B5k20UvPbQovj6FI4y76IGcCcLgJgDb3BBtsgm5bTVcEzsz1tNEAfcM24STCQpSZA8fO7UE8r-_oq4xbC5ceJ9VzKRcg",
      descripcion:
        "Departamento moderno con vista panorámica a la ciudad, ideal para profesionales o parejas jóvenes.",
      ubicacion: "Distrito Financiero",
      precio: "$1,200,000",
      superficie: "180 m²",
      habitaciones: 3,
      baños: 2,
    },
    3: {
      titulo: "Cabaña acogedora en las afueras",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEDJ5Pw_HALVYTgDQ82dti-Aqxt-bgzavTJPEpQHfekURlD26AeHuqKono4jYfRCkX254t2gm1YYASHrrsaBkrj1RLwL5zBR7fNmMTOdN6ZvNF-3d2sMOiMdwBp7e8Dq8-AW_X3rz-UGjEJ_2cjvu9UrGo90w5AtEM_Vx2EZaLdfJeyGkjHsZ0W34531VgfxGAy3cPBG1RWLHb6y1dPiTe_817CHy7zrAZMj7uSE4KQ7SSqIwkzCbo1eZanS2A0-L_ClEOQlmyXA",
      descripcion:
        "Cabaña de madera ideal para escapadas, rodeada de naturaleza y con una vista increíble a las montañas.",
      ubicacion: "Villa Tranquila",
      precio: "$320,000",
      superficie: "150 m²",
      habitaciones: 2,
      baños: 1,
    },
  };

  const propiedad = propiedades[id] || propiedades[1];

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
      {/* === SIDEBAR === */}
      <aside className="w-72 bg-white dark:bg-background-dark border-r border-gray-200 dark:border-gray-800 flex-col justify-between hidden lg:flex">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Re/Max
          </h1>
          <nav className="flex flex-col gap-2">

            <a
              href="/"
              className="flex items-center gap-3 px-4 py-2 rounded text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20"
            >
              🏠 <span>Inicio</span>
            </a>

            <a
              href="/guardadas" className="flex items-center gap-3 px-4 py-2 rounded text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20"
            >
              ❤️ <span>Propiedades guardadas</span> 
              </a> 

              <a href="/reservas" className="flex items-center gap-3 px-4 py-2 rounded text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20" > 
              📅 <span>Reservas</span> </a>
              
              <a href="/transacciones" className="flex items-center gap-3 px-4 py-2 rounded text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20" > 
              💰 <span>Transacciones</span> </a> 

              <a href="/perfil" className="flex items-center gap-3 px-4 py-2 rounded text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20" > 
              👤 <span>Perfil</span> </a> 
              </nav> 
              </div>  

              <div className="p-6"> 
                <nav className="flex flex-col gap-1"> 

                  <a href="/ayuda" className="flex items-center gap-3 px-4 py-2 rounded text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20" > 
                  ❓ <span>Ayuda</span> </a> 

                  <a href="#" className="flex items-center gap-3 px-4 py-2 rounded text-sm font-medium hover:bg-primary/10 dark:hover:bg-primary/20" > 
                  ⚙️ <span>Configuración</span> </a> 
                  </nav> 
                  </div> 
                  </aside>

      {/* === CONTENIDO PRINCIPAL === */}
      <main className="flex-1 px-6 py-8 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 text-sm text-gray-500">
            <a href="/" className="hover:text-primary">
              Propiedades
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{propiedad.titulo}</span>
          </div>

          <h2 className="text-3xl font-bold mb-4">{propiedad.titulo}</h2>

          <div className="bg-white dark:bg-gray-900/50 p-6 rounded-lg shadow-md">
            <img
              src={propiedad.img}
              alt={propiedad.titulo}
              className="w-full h-80 object-cover rounded-lg mb-6"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              🏡 <b>Descripción:</b> {propiedad.descripcion}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              📍 Ubicación: {propiedad.ubicacion}
              <br />
              💰 Precio: {propiedad.precio}
              <br />
              📐 Superficie: {propiedad.superficie}
              <br />
              🛏️ Habitaciones: {propiedad.habitaciones} · 🛁 Baños: {propiedad.baños}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
