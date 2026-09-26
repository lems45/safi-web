export const configuracion = {
  correo: "TU_CORREO_SAFI@ejemplo.com",
  formularioIngreso: "https://forms.google.com/",
  instagram: "https://www.instagram.com/safi_uaemex/"
};

export const equipos = [
  {
    slug: "potrorockets",
    nombre: "PotroRockets",
    subtitulo: "COHETERÍA EXPERIMENTAL",
    descripcion:
      "Equipo SAFI dedicado al diseño, construcción, instrumentación, validación y operación de vehículos de cohetería experimental.",
    imagen: "/images/team-potrorockets.jpg",
    areas: [
      "Aeroestructuras",
      "Propulsión",
      "Recuperación",
      "Aviónica",
      "Logística"
    ]
  },
  {
    slug: "cansat",
    nombre: "CanSat",
    subtitulo: "SISTEMAS AEROESPACIALES COMPACTOS",
    descripcion:
      "Equipo SAFI dedicado al desarrollo de plataformas CanSat, electrónica, comunicaciones, sensores, software y misiones experimentales.",
    imagen: "/images/team-cansat.jpg",
    areas: [
      "Electrónica",
      "Sensores",
      "Comunicaciones",
      "Software",
      "Energía",
      "Estación terrestre"
    ]
  }
];

export const proyectos = [
  {
    slug: "akbal-ii",
    equipo: "PotroRockets",
    categoria: "COHETERÍA EXPERIMENTAL",
    titulo: "AKBAL-II",
    estado: "MISIÓN 2026",
    imagen: "/images/project-akbal.jpg",
    hero: "/images/akbal-hero.jpg",
    resumen:
      "Vehículo experimental desarrollado por PotroRockets para una misión objetivo de 3,000 m en LASC 2026.",
    descripcion:
      "AKBAL-II integra propulsión sólida, aviónica, telemetría, recuperación dual, estructura modular y una carga útil experimental.",
    especificaciones: [
      ["MISIÓN", "LASC 2026"],
      ["ALTITUD OBJETIVO", "3,000 m"],
      ["MASA AL DESPEGUE", "32.7 kg"],
      ["PROPULSIÓN", "SRM / KNSU"],
      ["IMPULSO TOTAL", "9,180 N·s"],
      ["TIEMPO DE QUEMADO", "2.8 s"]
    ]
  },
  {
    slug: "hybrid",
    equipo: "PotroRockets",
    categoria: "PROPULSIÓN DE NUEVA GENERACIÓN",
    titulo: "Cohete híbrido",
    estado: "EN DESARROLLO",
    imagen: "/images/project-hybrid.jpg",
    hero: "/images/hybrid-hero.jpg",
    resumen:
      "Nueva generación de vehículo experimental SAFI basada en propulsión híbrida.",
    descripcion:
      "El programa híbrido amplía las capacidades de PotroRockets hacia nuevos sistemas de propulsión, bancos de prueba, instrumentación y control de operaciones.",
    especificaciones: [
      ["ESTADO", "En desarrollo"],
      ["FASE", "Diseño y pruebas"],
      ["SISTEMA", "Propulsión híbrida"],
      ["INFRAESTRUCTURA", "Banco instrumentado"],
      ["DATOS", "Adquisición y registro"],
      ["OPERACIÓN", "Sistemas terrestres"]
    ],
    sistemas: [
      ["Motor", "Desarrollo y caracterización del sistema de propulsión híbrida."],
      ["Banco de pruebas", "Infraestructura mecánica e instrumentada para validación."],
      ["Instrumentación", "Medición de variables relevantes durante las pruebas."],
      ["Adquisición de datos", "Registro y visualización de información de operación."],
      ["Sistemas terrestres", "Control, comunicaciones y supervisión remota."],
      ["Vehículo", "Integración futura del sistema en una nueva plataforma experimental."]
    ]
  },
  {
    slug: "agas",
    equipo: "PotroRockets",
    categoria: "RECUPERACIÓN AUTÓNOMA",
    titulo: "AGAS",
    estado: "I+D",
    imagen: "/images/project-agas.jpg",
    hero: "/images/agas-hero.jpg",
    resumen:
      "Sistema de Recuperación Autónomo por Parafoil orientado a navegación guiada hacia una zona de aterrizaje.",
    descripcion:
      "AGAS explora recuperación guiada mediante parafoil, navegación, control, actuadores y estimación de estado.",
    especificaciones: [
      ["TIPO", "Recuperación guiada"],
      ["PLATAFORMA", "Parafoil"],
      ["NAVEGACIÓN", "GNSS"],
      ["CONTROL", "Autónomo"],
      ["ACTUACIÓN", "Líneas de dirección"],
      ["ESTADO", "Investigación y desarrollo"]
    ],
    sistemas: [
      ["Navegación", "Estimación de posición y trayectoria hacia la zona objetivo."],
      ["Control", "Lógica de guiado y corrección de trayectoria."],
      ["Actuación", "Control de líneas de dirección mediante actuadores."],
      ["Parafoil", "Superficie flexible para descenso controlado."],
      ["Telemetría", "Seguimiento y supervisión durante pruebas."],
      ["Seguridad", "Pruebas progresivas y modos de contingencia."]
    ]
  },
  {
    slug: "cansat",
    equipo: "CanSat",
    categoria: "SISTEMAS AEROESPACIALES COMPACTOS",
    titulo: "CanSat",
    estado: "ACTIVO",
    imagen: "/images/project-cansat.jpg",
    hero: "/images/cansat-hero.jpg",
    resumen:
      "Plataforma compacta para desarrollar misiones de sensado, comunicaciones y sistemas aeroespaciales.",
    descripcion:
      "El programa CanSat permite desarrollar ciclos completos de misión en una plataforma compacta: requisitos, electrónica, energía, comunicaciones, software, integración y recuperación.",
    especificaciones: [
      ["PLATAFORMA", "CanSat"],
      ["MISIÓN", "Experimental"],
      ["AVIÓNICA", "Integrada"],
      ["COMUNICACIONES", "Telemetría"],
      ["SOFTWARE", "Misión y tierra"],
      ["ESTADO", "Activo"]
    ],
    sistemas: [
      ["Aviónica", "Computadora de misión y electrónica embarcada."],
      ["Sensores", "Adquisición de variables relevantes para la misión."],
      ["Comunicaciones", "Enlace entre plataforma y estación terrestre."],
      ["Software", "Firmware, procesamiento, visualización y lógica de misión."],
      ["Energía", "Distribución y administración eléctrica."],
      ["Integración", "Validación del sistema completo antes de la misión."]
    ]
  }
];

export const reclutamiento = {
  Computación: [
    "Software de misión",
    "Telemetría",
    "Estación terrestre",
    "Simulación",
    "Procesamiento de datos",
    "AGAS"
  ],
  Electrónica: [
    "Aviónica",
    "Sensores",
    "Telemetría",
    "Adquisición de datos",
    "Energía",
    "Instrumentación"
  ],
  Mecatrónica: [
    "Actuación",
    "Aviónica",
    "Integración",
    "Banco de pruebas",
    "Recuperación",
    "CanSat"
  ],
  Mecánica: [
    "Aeroestructuras",
    "Propulsión",
    "Manufactura",
    "Banco de pruebas",
    "Recuperación"
  ],
  Diseño: [
    "Comunicación visual",
    "Diseño de interfaces",
    "Material audiovisual",
    "Identidad",
    "Divulgación"
  ],
  Administración: [
    "Logística",
    "Patrocinios",
    "Gestión de proyectos",
    "Vinculación",
    "Eventos"
  ],
  Otra: [
    "Proyectos multidisciplinarios",
    "Divulgación",
    "Investigación",
    "Operaciones",
    "Gestión"
  ]
};
