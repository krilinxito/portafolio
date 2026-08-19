export type Idioma = 'es' | 'en';

export const ui = {
  es: {
    lang: 'es',
    titulo: 'Maximiliano Gómez Mallo — Datos y software',
    descripcionMeta:
      'Estudiante de Informática en La Paz, Bolivia. Sistemas en producción, pipelines de datos y modelos de machine learning evaluados con métricas.',
    rol: 'Datos y software',
    proyectos: 'Proyectos',
    contacto: 'Contacto',
    demoEnVivo: '(demo en vivo)',
    terminal: [
      { prompt: 'whoami', salida: 'Estudiante de Informática — La Paz, Bolivia' },
      { prompt: 'stack --top', salida: 'Python · SQL · FastAPI · Node.js · PostgreSQL' },
    ],
    otroIdioma: { codigo: 'en', etiqueta: 'EN', href: '/en/' },
  },
  en: {
    lang: 'en',
    titulo: 'Maximiliano Gómez Mallo — Data & software',
    descripcionMeta:
      'Computer Science student in La Paz, Bolivia. Systems running in production, data pipelines and machine learning models evaluated with real metrics.',
    rol: 'Data & software',
    proyectos: 'Projects',
    contacto: 'Contact',
    demoEnVivo: '(live demo)',
    terminal: [
      { prompt: 'whoami', salida: 'Computer Science student — La Paz, Bolivia' },
      { prompt: 'stack --top', salida: 'Python · SQL · FastAPI · Node.js · PostgreSQL' },
    ],
    otroIdioma: { codigo: 'es', etiqueta: 'ES', href: '/' },
  },
} as const;

export const intro = {
  es: 'Me interesa el área de datos y aprendo haciendo. Algunos de estos proyectos ya corren en producción; en otros todavía estoy explorando.',
  en: "I'm drawn to data work and I learn by doing. Some of these already run in production; others are still me exploring.",
};
