import type { Idioma } from './ui';

export interface Proyecto {
  indice: string;
  nombre: string;
  /** Tecnologías, iguales en ambos idiomas. */
  stack: string[];
  descripcion: Record<Idioma, string>;
  /** Cifras verificadas contra los repos e informes. Una por línea. */
  metricas: Record<Idioma, string[]>;
  enlace?: {
    texto: string;
    href: string;
    /** true = demo en vivo que se puede abrir; false = repositorio. */
    vivo: boolean;
  };
}

export const proyectos: Proyecto[] = [
  {
    indice: '01',
    nombre: 'Taqueando',
    stack: ['Node.js', 'Express', 'React', 'MySQL'],
    descripcion: {
      es: 'Sistema de gestión de pedidos y caja de un restaurante familiar en La Paz, en producción desde mediados de 2025. Cubre el turno completo: comandas, cobro, arqueos de caja y auditoría por usuario. Lo desplegué y lo mantengo en un VPS propio.',
      en: 'Order and cash-management system for a family restaurant in La Paz, in production since mid-2025. It covers the whole shift: kitchen tickets, payments, cash-drawer reconciliation and per-user audit logs. I deploy and maintain it myself on a VPS.',
    },
    metricas: {
      es: ['~7.950 pedidos', '246 días operativos', 'en producción desde 2025'],
      en: ['~7,950 orders', '246 operating days', 'in production since 2025'],
    },
    enlace: { texto: 'taqueando.store', href: 'https://taqueando.store', vivo: true },
  },
  {
    indice: '02',
    nombre: 'El Observador Digital',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'MiniLM', 'Gemini'],
    descripcion: {
      es: 'Pipeline diario que hace scraping de 6 medios bolivianos, agrupa las noticias en eventos por similitud semántica y mide el sesgo editorial comparando cómo cubre cada medio el mismo hecho.',
      en: 'Daily pipeline that scrapes 6 Bolivian news outlets, groups articles into events by semantic similarity and measures editorial bias by comparing how each outlet covers the same story.',
    },
    metricas: {
      es: ['6 medios', 'coseno > 0,65 + Union-Find', '2 jobs diarios'],
      en: ['6 outlets', 'cosine > 0.65 + Union-Find', '2 daily jobs'],
    },
    enlace: {
      texto: 'observador-digital.maxi42.space',
      href: 'https://observador-digital.maxi42.space',
      vivo: true,
    },
  },
  {
    indice: '03',
    nombre: 'bioAlerta',
    stack: ['Python', 'scikit-learn', 'GeoPandas', 'DVC', 'MLflow'],
    descripcion: {
      es: 'Modelo que estima si una especie boliviana de ave o mamífero está amenazada, a partir de rasgos biológicos y variables geoespaciales, para priorizar las 175 especies que la IUCN aún no clasificó.',
      en: 'Model that estimates whether a Bolivian bird or mammal species is threatened, from biological traits and geospatial features, to prioritise the 175 species the IUCN has not yet classified.',
    },
    metricas: {
      es: ['ROC-AUC 0,848', 'desbalance 1:34', '2,2 GB versionados'],
      en: ['ROC-AUC 0.848', '1:34 class imbalance', '2.2 GB versioned'],
    },
    enlace: { texto: 'bioalertaml.netlify.app', href: 'https://bioalertaml.netlify.app', vivo: true },
  },
  {
    indice: '04',
    nombre: 'Taqueando Analytics',
    stack: ['Python', 'statsmodels', 'TensorFlow', 'Flask'],
    descripcion: {
      es: 'Pronóstico del ingreso diario del restaurante sobre sus ventas reales. Comparé SARIMA, Holt-Winters y una red LSTM; la estacionalidad tiene periodo 5, no 7, porque el local abre de martes a sábado.',
      en: "Forecasting the restaurant's daily revenue on its real sales. I compared SARIMA, Holt-Winters and an LSTM; the seasonal period is 5, not 7, because the place opens Tuesday through Saturday.",
    },
    metricas: {
      es: ['MAPE 22,0 % (LSTM)', 'vs 27,3 % y 35,2 %', '246 días operativos'],
      en: ['MAPE 22.0% (LSTM)', 'vs 27.3% and 35.2%', '246 operating days'],
    },
    enlace: {
      texto: 'github.com/krilinxito/taqueando-analytics',
      href: 'https://github.com/krilinxito/taqueando-analytics',
      vivo: false,
    },
  },
  {
    indice: '05',
    nombre: 'Tráfico LP',
    stack: ['Python', 'scikit-learn', 'UMAP', 'OSMnx', 'Folium'],
    descripcion: {
      es: 'Análisis no supervisado de la congestión vial de La Paz y El Alto con un dataset propio, recolectado hora por hora con la Distance Matrix API sobre la red vial de OpenStreetMap.',
      en: 'Unsupervised analysis of road congestion in La Paz and El Alto using a dataset I collected myself, hour by hour, through the Distance Matrix API over the OpenStreetMap road network.',
    },
    metricas: {
      es: ['96 mediciones × 250 segmentos', '10,8 % de arterias', 'concentra la congestión'],
      en: ['96 readings × 250 segments', '10.8% of arteries', 'concentrate the congestion'],
    },
    enlace: {
      texto: 'github.com/krilinxito/lapaz-traffic',
      href: 'https://github.com/krilinxito/lapaz-traffic',
      vivo: false,
    },
  },
  {
    indice: '06',
    nombre: 'wavegame',
    stack: ['Node.js', 'Socket.io', 'Redis', 'MariaDB', 'Docker'],
    descripcion: {
      es: 'Juego de fiesta multijugador en tiempo real: un jugador ve dónde cae el objetivo en un dial y da una sola pista para que su equipo lo adivine. Estado de sala en Redis y capa de servicios separada de la red.',
      en: 'Real-time multiplayer party game: one player sees where the target falls on a dial and gives a single clue for their team to guess it. Room state in Redis and a service layer kept separate from the network.',
    },
    metricas: {
      es: ['salas en tiempo real', '~50 eventos de socket', '3 modos de juego'],
      en: ['real-time rooms', '~50 socket events', '3 game modes'],
    },
    enlace: { texto: 'wavebyplebe.com', href: 'https://wavebyplebe.com', vivo: true },
  },
];
