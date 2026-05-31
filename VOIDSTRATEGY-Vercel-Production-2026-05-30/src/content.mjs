export const site = {
  name: "VOIDSTRATEGY",
  slogan: "EL MUNDO ES UN TABLERO.",
  subtitle: "Analizamos lo que otros ignoran.",
  description:
    "Análisis profundo sobre geopolítica, defensa, economía, tecnología y poder global.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://voidstrategy.com",
};

export const categories = [
  {
    slug: "geopolitica",
    label: "Geopolítica",
    description:
      "Poder global, bloques regionales, alianzas, rutas y disputas que redefinen el equilibrio internacional.",
  },
  {
    slug: "defensa",
    label: "Defensa",
    description:
      "Capacidades militares, doctrina, tecnología de defensa y tensiones que mueven el tablero estratégico.",
  },
  {
    slug: "economia",
    label: "Economía",
    description:
      "Energía, sanciones, cadenas de suministro, monedas y poder económico detrás de los conflictos.",
  },
  {
    slug: "tecnologia",
    label: "Tecnología",
    description:
      "IA, vigilancia, semiconductores, ciberseguridad y la nueva infraestructura del poder.",
  },
  {
    slug: "opinion",
    label: "Opinión",
    description:
      "Lecturas editoriales sobre narrativa, poder, estrategia y consecuencias políticas.",
  },
];

export const articles = [
  {
    title: "El nuevo orden mundial ya está en movimiento",
    slug: "nuevo-orden-mundial-en-movimiento",
    category: "geopolitica",
    excerpt:
      "Un análisis profundo de las fuerzas que están redefiniendo el equilibrio global de poder.",
    author: "Alejandro V.",
    date: "2026-05-24",
    readingTime: "8 min",
    featured: true,
    seoTitle: "El nuevo orden mundial ya está en movimiento",
    seoDescription:
      "Análisis sobre la transformación del poder global, alianzas emergentes y nuevas tensiones geopolíticas.",
    content: [
      "El tablero global no cambia por declaraciones aisladas, sino por acumulación de incentivos, capacidades y señales. Las potencias no anuncian siempre sus movimientos; muchas veces los preparan en silencio.",
      "La competencia por rutas, energía, infraestructura tecnológica y control narrativo está creando un sistema internacional más fragmentado, menos predecible y más estratégico.",
      "VOIDSTRATEGY observa esos movimientos desde una pregunta central: quién gana margen de maniobra y quién queda atrapado en una posición reactiva.",
    ],
  },
  {
    title: "La carrera armamentista del siglo XXI",
    slug: "carrera-armamentista-siglo-xxi",
    category: "defensa",
    excerpt:
      "La defensa moderna se decide entre industria, inteligencia artificial, municiones y dominio informacional.",
    author: "Mariana R.",
    date: "2026-05-23",
    readingTime: "6 min",
    featured: false,
    seoTitle: "La carrera armamentista del siglo XXI",
    seoDescription:
      "Defensa, IA, industria militar y competencia estratégica en el nuevo ciclo armamentista global.",
    content: [
      "La carrera armamentista actual no se limita a tanques, buques o aviones. El nuevo centro de gravedad combina sensores, datos, producción industrial y velocidad de adaptación.",
      "Los países con capacidad de fabricar, reponer y aprender más rápido obtienen una ventaja que no siempre aparece en los titulares.",
    ],
  },
  {
    title: "El poder económico detrás de los conflictos",
    slug: "poder-economico-detras-conflictos",
    category: "economia",
    excerpt:
      "Cada crisis militar tiene una capa económica: energía, deuda, sanciones, rutas y acceso a mercados.",
    author: "Diego M.",
    date: "2026-05-22",
    readingTime: "7 min",
    featured: false,
    seoTitle: "El poder económico detrás de los conflictos",
    seoDescription:
      "Lectura económica de conflictos globales: energía, sanciones, rutas comerciales y competencia geoestratégica.",
    content: [
      "El conflicto visible suele ser militar o diplomático. El conflicto profundo suele estar en balances energéticos, rutas de comercio, divisas y capacidad fiscal.",
      "Quien controla los costos de una crisis controla también la duración política de esa crisis.",
    ],
  },
  {
    title: "IA y vigilancia: el nuevo campo de batalla",
    slug: "ia-vigilancia-nuevo-campo-batalla",
    category: "tecnologia",
    excerpt:
      "La inteligencia artificial ya no es solo productividad: es vigilancia, predicción, control y ventaja estratégica.",
    author: "River J.",
    date: "2026-05-21",
    readingTime: "5 min",
    featured: false,
    seoTitle: "IA y vigilancia: el nuevo campo de batalla",
    seoDescription:
      "Cómo la inteligencia artificial y la vigilancia redefinen seguridad, defensa y competencia global.",
    content: [
      "La IA altera el equilibrio entre información y poder. Quien puede detectar patrones antes que el adversario puede decidir antes, presionar antes y adaptarse antes.",
      "El debate tecnológico es también un debate geopolítico sobre autonomía, soberanía y control de infraestructura crítica.",
    ],
  },
  {
    title: "El poder no se toma, se diseña",
    slug: "poder-no-se-toma-se-disena",
    category: "opinion",
    excerpt:
      "Las estructuras de poder se construyen antes de hacerse visibles. El tablero se prepara antes del movimiento.",
    author: "Alejandro V.",
    date: "2026-05-20",
    readingTime: "4 min",
    featured: false,
    seoTitle: "El poder no se toma, se diseña",
    seoDescription:
      "Opinión editorial sobre estrategia, poder, narrativa y arquitectura de influencia global.",
    content: [
      "El poder rara vez aparece de golpe. Primero se diseña: se financia, se protege, se legitima y se normaliza.",
      "La política visible es el último movimiento de una arquitectura previa.",
    ],
  },
];

