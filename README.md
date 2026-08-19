# Portafolio — Maximiliano Gómez Mallo

Sitio estático en Astro + Tailwind v4. Estética de terminal retro en escala de grises con
acentos en amarillo huevo, con modo día y noche.

Bilingüe: español en `/` e inglés en `/en/`.

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview
```

## Dónde tocar qué

- **Contenido de los proyectos** → `src/data/proyectos.ts`. Única fuente de verdad: agregar
  un proyecto es añadir un objeto al array, con su descripción y métricas en los dos idiomas.
- **Textos de interfaz y la terminal del hero** → `src/data/ui.ts`.
- **Colores** → `src/styles/global.css`. El bloque `@theme` define el modo noche; las dos
  reglas de abajo, fuera de `@layer`, definen el día (una para quien sigue al sistema y otra
  para la elección explícita).
- **Fuentes** → `public/fonts/`. Autoalojadas a propósito: sin peticiones a Google Fonts.

## Detalles que conviene no romper

- **Contraste**: el acento cambia de valor entre modos porque el amarillo huevo da 1,68:1 sobre
  blanco. En día se usa un ocre calculado contra el gris de la banda de la terminal, que es el
  fondo más exigente. Si tocas esos colores, vuelve a medir.
- **La banda de la terminal** usa el mismo color y grano que las bandas laterales (`var()`
  encadenado) para que se funda con el fondo. Si le pones un fondo semitransparente, los
  filetes de la columna se transparentan y el grano se duplica.
- **La animación de la terminal es solo CSS**, con el texto siempre en el DOM: así no hay
  desplazamiento de layout ni dependencia de JavaScript.
- `overflow-x: clip` (no `hidden`) en `html` y `body`: `hidden` crearía un contenedor de
  scroll y las barras fijas de navegación dejarían de funcionar.

## Despliegue

`npm run build` produce `dist/`, que es HTML, CSS y fuentes estáticos (~156 KB). En Netlify:
comando `npm run build`, directorio de publicación `dist`.
