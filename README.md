# Mehring · sitio web

Sitio de una sola página para promocionar **Mehring®** (Sucesores de Gerardo R. Mehring S.A.),
fábrica de sillas de madera de Esperanza, Santa Fe — la primera fábrica de sillas en serie
de la Argentina, fundada en 1953.

## Stack

- **Vite 8** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (plugin `@tailwindcss/vite`, tema en `src/index.css`)
- **lucide-react** para iconos
- **Fuentes self-hosted** (`@fontsource-variable/fraunces` + `inter`), sin llamadas a
  Google Fonts.
- Animaciones de entrada con CSS + hooks propios de `IntersectionObserver`
  (`src/hooks/useReveal.ts`, `src/hooks/useScrollSpy.ts`) — sin dependencias de animación.
- Navegación con scroll suave con easing propio (`src/lib/smoothScroll.ts`).

## Performance / SEO

- Imágenes en **WebP**, ≤1800 px, con `loading="lazy"` salvo el hero
  (`fetchpriority="high"` + `<link rel="preload">`).
- `public/robots.txt` y `public/sitemap.xml` — actualizá el dominio antes de publicar.
- JSON-LD `FurnitureStore` en `index.html` (dirección, teléfono, fundación).
- **Medí siempre contra `npm run build` + `npm run preview`**, no contra `npm run dev`:
  el dev server infla FCP/LCP y sirve `index.html` como fallback (rompe la validación
  de robots.txt en Lighthouse).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve el build
```

## Estructura

```
public/
  img/                 Fotos de producto y ambientes (WebP)
  robots.txt sitemap.xml favicon.svg
src/
  data/products.ts     Catálogo (nombre, categoría, imagen, descripción)
  hooks/
    useReveal.ts        Revelado al hacer scroll
    useScrollSpy.ts     Sección activa para el menú
  lib/smoothScroll.ts  Scroll con easing + handler de anchors
  components/
    Nav, Hero, Historia, Colecciones, Oficio, Cita,
    Terminaciones, Contacto, Footer, Reveal, Logo
  App.tsx              Composición de la página
  main.tsx             Entry + imports de fuentes
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
