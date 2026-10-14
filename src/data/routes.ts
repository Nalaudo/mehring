import type { Category } from './products.ts'

export const SITE_URL = 'https://www.mehring.com.ar'

/**
 * Indexable paths. Each one is the same single-page site, opened scrolled to a
 * section (and, for catalogue categories, with that filter preselected). The
 * build emits an HTML file per path with its own title/description/canonical so
 * Google can list them as separate results (sitelinks).
 */
export type SectionRoute = {
  path: string
  section: string
  category?: Category
  title: string
  description: string
}

export const sectionRoutes: SectionRoute[] = [
  {
    path: '/productos',
    section: 'colecciones',
    title: 'Productos · Mehring',
    description:
      'Sillas, sillones, banquetas, mesas de comedor y buffets de madera con diseño propio. Fábrica Mehring, Esperanza, Santa Fe.',
  },
  {
    path: '/sillas-y-sillones',
    section: 'colecciones',
    category: 'Sillas y Sillones',
    title: 'Sillas y Sillones de madera · Mehring',
    description:
      'Sillas y sillones de madera fabricados en Argentina desde 1953. Modelos con diseño exclusivo, lustres y tapizados a elección.',
  },
  {
    path: '/banquetas',
    section: 'colecciones',
    category: 'Banquetas',
    title: 'Banquetas de madera · Mehring',
    description:
      'Banquetas altas de madera para barras e islas de cocina. Diseño y fabricación Mehring, Esperanza, Santa Fe.',
  },
  {
    path: '/mesas-de-comedor',
    section: 'colecciones',
    category: 'Mesas de Comedor',
    title: 'Mesas de comedor de madera · Mehring',
    description:
      'Mesas de comedor de madera maciza con diseño propio. Fábrica de muebles Mehring desde 1953.',
  },
  {
    path: '/buffets-y-vajilleros',
    section: 'colecciones',
    category: 'Buffets y Vajilleros',
    title: 'Buffets y Vajilleros de madera · Mehring',
    description:
      'Buffets y vajilleros de madera para el comedor. Muebles Mehring hechos en Esperanza, Santa Fe.',
  },
  {
    path: '/la-empresa',
    section: 'nosotros',
    title: 'La Empresa · Mehring',
    description:
      'Desde 1953, la primera fábrica de sillas en serie de la Argentina. Historia, oficio y madera noble en Esperanza, Santa Fe.',
  },
  {
    path: '/lustres',
    section: 'lustres',
    title: 'Terminaciones y tonos de lustre · Mehring',
    description:
      'Carta de lustres y lacas poliuretánicas para sillas y muebles Mehring.',
  },
  {
    path: '/tapizados',
    section: 'tapizados',
    title: 'Tapizados y telas · Mehring',
    description: 'Amplia carta de telas para la tapicería de sillas y sillones Mehring.',
  },
  {
    path: '/corporativos',
    section: 'corporativos',
    title: 'Proyectos corporativos · Mehring',
    description:
      'Sillas y mobiliario de madera para hoteles, restaurantes y proyectos corporativos.',
  },
  {
    path: '/profesionales',
    section: 'profesionales',
    title: 'Arquitectos y diseñadores · Mehring',
    description: 'Atención a arquitectos, interioristas y profesionales del diseño.',
  },
  {
    path: '/contacto',
    section: 'contacto',
    title: 'Contacto · Mehring',
    description:
      'Contactá a Mehring: Castelli 2041, Esperanza, Santa Fe. Tel. +54 3496 530698 · info@mehring.com.ar',
  },
]

/** Route for the current pathname, if any (ignores a trailing slash). */
export function routeForPath(pathname: string) {
  const clean = pathname.replace(/\/+$/, '') || '/'
  return sectionRoutes.find((r) => r.path === clean)
}
