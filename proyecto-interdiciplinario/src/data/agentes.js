const agentes = [
  {
    id: 1,
    nombre: "Laura Fernández",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "laura.fernandez@remax.com",
    telefono: "+54 11 2345-6789",
    especialidad: "Ventas inmobiliarias",
    descripcion: "Experta en casas familiares y propiedades premium."
  },
  {
    id: 2,
    nombre: "Carlos Gómez",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "carlos.gomez@remax.com",
    telefono: "+54 11 3355-8899",
    especialidad: "Alquileres y administración",
    descripcion: "10 años de experiencia asesorando inquilinos y propietarios."
  },
  {
    id: 3,
    nombre: "Mariana Torres",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    email: "mariana.torres@remax.com",
    telefono: "+54 9 351 445-6677",
    especialidad: "Propiedades de lujo",
    descripcion: "Especialista en operaciones exclusivas y clientes VIP."
  },
  {
    id: 4,
    nombre: "Diego Ruiz",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    email: "diego.ruiz@remax.com",
    telefono: "+54 9 381 882-1166",
    especialidad: "Tasación y análisis de mercado",
    descripcion: "Con amplia trayectoria en valuación profesional."
  },

  /* NUEVOS AGENTES */
  {
    id: 5,
    nombre: "Sofía Álvarez",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    email: "sofia.alvarez@remax.com",
    telefono: "+54 9 341 552-2211",
    especialidad: "Marketing inmobiliario",
    descripcion: "Gran capacidad para posicionamiento y visibilidad online."
  },
  {
    id: 6,
    nombre: "Hernán Villalba",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    email: "hernan.villalba@remax.com",
    telefono: "+54 11 4478-9988",
    especialidad: "Inversiones",
    descripcion: "Asesor en inversiones inmobiliarias a corto y largo plazo."
  },
  {
    id: 7,
    nombre: "Camila Rivas",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    email: "camila.rivas@remax.com",
    telefono: "+54 9 221 665-0099",
    especialidad: "Departamentos urbanos",
    descripcion: "Especialista en propiedades céntricas y vida urbana."
  },
  {
    id: 8,
    nombre: "Julián Herrera",
    img: "https://randomuser.me/api/portraits/men/17.jpg",
    email: "julian.herrera@remax.com",
    telefono: "+54 381 772-8899",
    especialidad: "Casas rurales",
    descripcion: "Amplia experiencia en terrenos y casas en zonas rurales."
  },
  {
    id: 9,
    nombre: "Valentina Martínez",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
    email: "vale.martinez@remax.com",
    telefono: "+54 9 351 556-1122",
    especialidad: "Atención al cliente VIP",
    descripcion: "Enfoque personalizado con clientes premium."
  },
  {
    id: 10,
    nombre: "Tomás Pereyra",
    img: "https://randomuser.me/api/portraits/men/80.jpg",
    email: "tomas.pereyra@remax.com",
    telefono: "+54 11 3982-7711",
    especialidad: "Barrios privados",
    descripcion: "Experto en countries y barrios cerrados."
  },
  {
    id: 11,
    nombre: "Julieta Cabrera",
    img: "https://randomuser.me/api/portraits/women/15.jpg",
    email: "ju.cabrera@remax.com",
    telefono: "+54 9 381 662-7700",
    especialidad: "Alquileres temporarios",
    descripcion: "Especialista en Airbnb y propiedades vacacionales."
  },
  {
    id: 12,
    nombre: "Federico Sosa",
    img: "https://randomuser.me/api/portraits/men/62.jpg",
    email: "federico.sosa@remax.com",
    telefono: "+54 11 4432-9088",
    especialidad: "Lotes y terrenos",
    descripcion: "Conocimiento profundo en subdivisiones y desarrollo."
  },
  {
    id: 13,
    nombre: "Ana Morales",
    img: "https://randomuser.me/api/portraits/women/72.jpg",
    email: "ana.morales@remax.com",
    telefono: "+54 9 264 550-8932",
    especialidad: "Casas familiares",
    descripcion: "Te guía para encontrar el hogar perfecto."
  },
  {
    id: 14,
    nombre: "Nicolás Duarte",
    img: "https://randomuser.me/api/portraits/men/28.jpg",
    email: "nico.duarte@remax.com",
    telefono: "+54 9 261 441-2100",
    especialidad: "Remates y subastas",
    descripcion: "Acompaña todo el proceso de compra en remates."
  },
  {
    id: 15,
    nombre: "Carolina Ortíz",
    img: "https://randomuser.me/api/portraits/women/41.jpg",
    email: "caro.ortiz@remax.com",
    telefono: "+54 9 299 550-2201",
    especialidad: "Propiedades de montaña",
    descripcion: "Especialista en zonas elevadas y refugios."
  },
  {
    id: 16,
    nombre: "Gonzalo Figueroa",
    img: "https://randomuser.me/api/portraits/men/30.jpg",
    email: "gonza.fig@remax.com",
    telefono: "+54 9 2964 334-882",
    especialidad: "Locales comerciales",
    descripcion: "Ayuda a empresas y emprendedores a encontrar su lugar ideal."
  },
  {
    id: 17,
    nombre: "Rocío Navarro",
    img: "https://randomuser.me/api/portraits/women/19.jpg",
    email: "rocio.navarro@remax.com",
    telefono: "+54 9 387 553-7731",
    especialidad: "Estudios jurídicos inmobiliarios",
    descripcion: "Acompaña trámites legales y documentaciones."
  },
  {
    id: 18,
    nombre: "Matías Correa",
    img: "https://randomuser.me/api/portraits/men/8.jpg",
    email: "mati.correa@remax.com",
    telefono: "+54 9 341 778-9911",
    especialidad: "Primer vivienda",
    descripcion: "Guía a compradores nuevos paso a paso."
  },
  {
    id: 19,
    nombre: "Paula Díaz",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    email: "paula.diaz@remax.com",
    telefono: "+54 9 11 6677-4452",
    especialidad: "Decoración y home staging",
    descripcion: "Potencia al máximo la estética de cada propiedad."
  },
  {
    id: 20,
    nombre: "Iván Castro",
    img: "https://randomuser.me/api/portraits/men/59.jpg",
    email: "ivan.castro@remax.com",
    telefono: "+54 11 5577-9900",
    especialidad: "Negociación avanzada",
    descripcion: "Experto en cierres exitosos y estrategias de negociación."
  }
];

export default agentes;
