# Mehring · sitio web

Sitio de una sola página para promocionar **Mehring®** (Sucesores de Gerardo R. Mehring S.A.),
fábrica de sillas de madera de Esperanza, Santa Fe — la primera fábrica de sillas en serie
de la Argentina, fundada en 1953.

## Stack

- **Vite 8** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (plugin `@tailwindcss/vite`, tema en `src/index.css`)
- **lucide-react** para iconos
- Animaciones de entrada con CSS + un hook propio de `IntersectionObserver`
  (`src/hooks/useReveal.ts`) — sin dependencias de animación.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve el build
```

## Estructura

```
public/img/            Fotos de producto y ambientes
src/
  data/products.ts     Catálogo (nombre, categoría, imagen, descripción)
  hooks/useReveal.ts   Revelado al hacer scroll
  components/
    Nav, Hero, Historia, Colecciones, Oficio, Cita,
    Terminaciones, Contacto, Footer, Reveal, Logo
  App.tsx              Composición de la página
  index.css            Tema Tailwind + tipografía + animaciones
```

## Contenido e imágenes

El texto institucional (historia, misión, valores, datos de planta) y las fotos de
producto se recuperaron del sitio original `mehring.com.ar` —hoy fuera de línea— a
través de una copia archivada, y de la cuenta de Instagram
[@mehringsillas](https://www.instagram.com/mehringsillas/).
Las imágenes fueron redimensionadas y recomprimidas para web (máx. 1800 px de ancho).

Los datos de las colecciones (`src/data/products.ts`) y las cartas de terminaciones
(`src/components/Terminaciones.tsx`) son un punto de partida editable: reemplazá fotos,
nombres y descripciones a medida que haya material definitivo.

## Contacto de la empresa

Castelli 2041 (S3080FSI), Esperanza, Santa Fe · +54 3496 530698 · info@mehring.com.ar
