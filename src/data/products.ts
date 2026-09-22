export type Category =
  | 'Sillas y Sillones'
  | 'Banquetas'
  | 'Mesas de Comedor'
  | 'Buffets y Vajilleros'

export interface Product {
  name: string
  category: Category
  image: string
  blurb: string
  isNew?: boolean
}

export const categories: Category[] = [
  'Sillas y Sillones',
  'Banquetas',
  'Mesas de Comedor',
  'Buffets y Vajilleros',
]

export const products: Product[] = [
  {
    name: 'Aldana',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/aldana.webp',
    blurb: 'Con asiento y respaldo tapizado. Guatambú, disponible con tapizado matelassé.',
  },
  {
    name: 'Aldana Esterilla',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/aldana-esterilla.webp',
    blurb: 'Asiento tapizado y respaldo con esterilla americana. Guatambú, también en esterilla francesa.',
  },
  {
    name: 'Alva',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/alva.webp',
    blurb: 'Poltrona en guatambú, también disponible en versión banco. Lustre tabaco y cuero natural; otros colores a consultar.',
  },
  {
    name: 'Atuel',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/atuel.webp',
    blurb: 'Asiento y respaldo tapizado en guatambú, con opción de tapizado matelassé.',
  },
  {
    name: 'Butacón Divi',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/butacon-divi.webp',
    blurb: 'Asiento y respaldo tapizado, con apoyabrazos de madera vista. Guatambú, disponible con matelassé.',
  },
  {
    name: 'Cocó',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/coco.webp',
    blurb: 'Hilera doble de tachas en guatambú. Tapizado con capitoné, matelassé o canelones.',
  },
  {
    name: 'Divi Respaldo Madera',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/divi-respaldo-madera.webp',
    blurb: 'Asiento tapizado y respaldo completo de madera, misma silueta que Divi Tapizado. Guatambú.',
  },
  {
    name: 'Divi Respaldo Tapizado',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/divi-respaldo-tapizado.webp',
    blurb: 'Asiento y respaldo tapizado con matelassé, tras de madera. Guatambú.',
  },
  {
    name: 'Emily',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/emily.webp',
    blurb: 'Estructura maciza de guatambú con asiento tapizado matelassé.',
  },
  {
    name: 'Emma',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/emma.webp',
    blurb: 'Estructura maciza y asiento tapizado en guatambú, con opción de matelassé.',
  },
  {
    name: 'Eushi',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/eushi.webp',
    blurb: 'Asiento y respaldo tapizado con matelassé, tras de madera. Guatambú o petiribí.',
  },
  {
    name: 'Frida Lenga',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/frida-lenga.webp',
    blurb: 'Asiento y respaldo tapizado en lenga, con frente en matelassé, capitoné o canelones.',
  },
  {
    name: 'Gala',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/gala.webp',
    blurb: 'Asiento y respaldo tapizado con capitoné en guatambú; también en matelassé, canelones o tachas.',
  },
  {
    name: 'Grecia',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/grecia.webp',
    blurb: 'Estructura maciza con cornisa calada para agarre. Guatambú, tapizado con capitoné o matelassé.',
  },
  {
    name: 'Isabella',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/isabella.webp',
    blurb: 'Silla en madera de paraíso, con asiento y respaldo tapizado matelassé.',
  },
  {
    name: 'Ivanna',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/ivanna.webp',
    blurb: 'Estructura maciza de guatambú con asiento y respaldo tapizado, opción matelassé.',
  },
  {
    name: 'Ivanna Esterilla',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/ivanna-esterilla.webp',
    blurb: 'Asiento tapizado y respaldo con esterilla americana. Guatambú, también en esterilla francesa.',
  },
  {
    name: 'Karen',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/karen.webp',
    blurb: 'Asiento y respaldo tapizado en guatambú, con capitoné, matelassé, canelones o tachas.',
  },
  {
    name: 'Margot',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/margot.webp',
    blurb: 'Apilable, con tras de madera y respaldo tapizado con matelassé. También en madera completa o esterillado.',
  },
  {
    name: 'Mimy Alta',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/mimy-alta.webp',
    blurb: 'Respaldo alto en guatambú, con tapizado en capitoné, matelassé, canelones o tachas.',
  },
  {
    name: 'Mimy Baja',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/mimy-baja.webp',
    blurb: 'Versión de respaldo bajo de la Mimy. Guatambú, también en paraíso consultando stock.',
  },
  {
    name: 'Mimy Alta Capitoné',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/mimy-alta-capitone.webp',
    blurb: 'La Mimy con capitoné en el respaldo, terminación más formal. Guatambú.',
  },
  {
    name: 'Mimy Alta Curve',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/mimy-alta-curve.webp',
    blurb: 'Diseño ergonómico sobre la línea Mimy Alta, en guatambú.',
  },
  {
    name: 'Mónaco',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/monaco.webp',
    blurb: 'Estructura maciza de guatambú con asiento y respaldo tapizado matelassé.',
  },
  {
    name: 'Nueva Venezzia',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/nueva-venezzia.webp',
    blurb: 'Respaldo corto tejido a mano en kraft, con esterilla francesa o americana. Guatambú.',
  },
  {
    name: 'Olivia',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/olivia.webp',
    blurb: 'Asiento y respaldo tapizado en guatambú, con y sin matelassé. También en petiribí.',
  },
  {
    name: 'Shery',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/shery.webp',
    blurb: 'Asiento tapizado con respaldo en madera de paraíso, terminación matelassé.',
  },
  {
    name: 'Hamaca Esterilla',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/hamaca-esterilla.webp',
    blurb: 'Sillón hamaca de paraíso con respaldo de esterilla francesa o americana.',
  },
  {
    name: 'Hamaca Tapizado',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/hamaca-tapizado.webp',
    blurb: 'Sillón hamaca de paraíso con respaldo tapizado.',
  },
  {
    name: 'Sillón JJ Escandinavo',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/sillon-jj-escandinavo.webp',
    blurb: 'Asiento y respaldo tapizado en madera de paraíso, de líneas escandinavas.',
  },
  {
    name: 'Sillón Leonardo',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/sillon-leonardo.webp',
    blurb: 'Respaldo tapizado con asiento de falso almohadón. Guatambú, también con matelassé.',
  },
  {
    name: 'Sillón Valentino',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/sillon-valentino.webp',
    blurb: 'Asiento, respaldo y posabrazos tapizados en guatambú, con opción de matelassé.',
  },
  {
    name: 'Sofi',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/sofi.webp',
    blurb: 'Silueta liviana que se integra a cualquier comedor sin imponerse. Guatambú.',
  },
  {
    name: 'Steffy',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/steffy.webp',
    blurb: 'Respaldo cruzado en madera maciza de guatambú, un clásico renovado.',
  },
  {
    name: 'Vicentina',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/vicentina.webp',
    blurb: 'Estructura maciza y plegable en guatambú, con asiento y respaldo tapizado.',
  },
  {
    name: 'Sillón Roma',
    category: 'Sillas y Sillones',
    image: '/img/catalogo/sillon-roma.webp',
    blurb: 'Sillón bajo de líneas simples y respaldo curvo, en guatambú.',
  },
  {
    name: 'Banqueta A9M',
    category: 'Banquetas',
    image: '/img/catalogo/banqueta-a9m.webp',
    blurb: 'Asiento y respaldo tapizado en guatambú, con opción de matelassé.',
  },
  {
    name: 'Banqueta Divi Respaldo Madera',
    category: 'Banquetas',
    image: '/img/catalogo/banqueta-divi-respaldo-madera.webp',
    blurb: 'Asiento tapizado y respaldo completo de madera, misma silueta que Divi Tapizado.',
  },
  {
    name: 'Banqueta Divi Respaldo Tapizado',
    category: 'Banquetas',
    image: '/img/catalogo/banqueta-divi-respaldo-tapizado.webp',
    blurb: 'Asiento y respaldo tapizado con matelassé, tras de madera.',
  },
  {
    name: 'Banqueta Emma',
    category: 'Banquetas',
    image: '/img/catalogo/banqueta-emma.webp',
    blurb: 'Estructura maciza y asiento tapizado en guatambú, con opción de matelassé.',
  },
  {
    name: 'Banqueta Estela',
    category: 'Banquetas',
    image: '/img/catalogo/banqueta-estela.webp',
    blurb: 'Líneas simples y asiento tapizado, en guatambú.',
  },
  {
    name: 'Banqueta Eushi',
    category: 'Banquetas',
    image: '/img/catalogo/banqueta-eushi.webp',
    blurb: 'Asiento y respaldo tapizado con matelassé, tras de madera. Guatambú o petiribí.',
  },
  {
    name: 'Banqueta Isabella',
    category: 'Banquetas',
    image: '/img/catalogo/banqueta-isabella.webp',
    blurb: 'Banqueta en madera de paraíso, con asiento y respaldo tapizado matelassé.',
  },
  {
    name: 'Banqueta Mimy',
    category: 'Banquetas',
    image: '/img/catalogo/banqueta-mimy.webp',
    blurb: 'Versión banqueta de la Mimy, en guatambú, con capitoné, matelassé, canelones o tachas.',
  },
  {
    name: 'Mesa Aldana',
    category: 'Mesas de Comedor',
    image: '/img/catalogo/mesa-aldana.webp',
    blurb: 'Base maciza de guatambú, tapa canto recto 38 mm. 1,00 × 2,00 × 0,75 m.',
  },
  {
    name: 'Mesa Bibiana',
    category: 'Mesas de Comedor',
    image: '/img/catalogo/mesa-bibiana.webp',
    blurb: 'Base con dos patas, tapa canto recto 38 mm. 1,20 × 2,55 × 0,75 m; también en 1,00 × 2,00 × 0,75 m.',
  },
  {
    name: 'Mesa Cata',
    category: 'Mesas de Comedor',
    image: '/img/catalogo/mesa-cata.webp',
    blurb: 'Base con dos patas en T, silueta arquitectónica. Guatambú, 1,00 × 2,00 × 0,76 m.',
  },
  {
    name: 'Mesa Cocó',
    category: 'Mesas de Comedor',
    image: '/img/catalogo/mesa-coco.webp',
    blurb: 'Base maciza central de pie ancho, tapa canto diagonal 45°. Guatambú, 1,00 × 2,00 × 0,75 m.',
  },
  {
    name: 'Mesa Dakota',
    category: 'Mesas de Comedor',
    image: '/img/catalogo/mesa-dakota.webp',
    blurb: 'Base con dos patas, tapa canto recto 38 mm. Guatambú, 1,00 × 2,00 × 0,76 m.',
  },
  {
    name: 'Mesa Duca',
    category: 'Mesas de Comedor',
    image: '/img/catalogo/mesa-duca.webp',
    blurb: 'Base maciza en forma de cruz. Guatambú, 1,00 × 2,00 × 0,75 m o 1,40 × 1,40 × 0,75 m.',
  },
  {
    name: 'Mesa Emma Extensible',
    category: 'Mesas de Comedor',
    image: '/img/catalogo/mesa-emma-extensible.webp',
    blurb: 'Base maciza de cuatro patas, extensible +60 cm. Guatambú, 1,20 × 1,20 (+0,60) × 0,75 m.',
  },
  {
    name: 'Mesa Florencia',
    category: 'Mesas de Comedor',
    image: '/img/catalogo/mesa-florencia.webp',
    blurb: 'Base maciza de cuatro patas, tapa canto recto 19 mm. Guatambú, 2,20 × 1,10 × 0,75 m.',
  },
  {
    name: 'Mesa Gala',
    category: 'Mesas de Comedor',
    image: '/img/catalogo/mesa-gala.webp',
    blurb: 'Base maciza, tapa canto recto 38 mm. Guatambú, 1,00 × 2,00 × 0,75 m.',
  },
  {
    name: 'Mesa Giulia',
    category: 'Mesas de Comedor',
    image: '/img/catalogo/mesa-giulia.webp',
    blurb: 'Base maciza de cuatro patas, tapa canto recto 19 mm. Guatambú, 0,80 × 1,30 × 0,75 m.',
  },
  {
    name: 'Mesa Ivanna',
    category: 'Mesas de Comedor',
    image: '/img/catalogo/mesa-ivanna.webp',
    blurb: 'Base maciza, tapa canto recto 19 mm o vidrio esmerilado. Guatambú, 0,80 × 1,60 × 0,75 m.',
  },
  {
    name: 'Mesa Mica',
    category: 'Mesas de Comedor',
    image: '/img/catalogo/mesa-mica.webp',
    blurb: 'Base rectangular de vértices redondeados. Guatambú, 2,00 × 1,00 × 0,75 m.',
  },
  {
    name: 'Mesa Misuri',
    category: 'Mesas de Comedor',
    image: '/img/catalogo/mesa-misuri.webp',
    blurb: 'Líneas rectas con patas en bloque, en guatambú.',
  },
  {
    name: 'Mesa Tiffany',
    category: 'Mesas de Comedor',
    image: '/img/catalogo/mesa-tiffany.webp',
    blurb: 'Base única piramidal, tapa canto recto 100 mm. Guatambú, 1,40 × 1,40 × 0,75 m.',
  },
  {
    name: 'Buffet Barcelona',
    category: 'Buffets y Vajilleros',
    image: '/img/catalogo/buffet-barcelona.webp',
    blurb: 'Frente continuo lacado, de líneas minimalistas. 2,00 × 0,45 × 0,80 m.',
  },
  {
    name: 'Buffet Berlín',
    category: 'Buffets y Vajilleros',
    image: '/img/catalogo/buffet-berlin.webp',
    blurb: 'Tapa en madera natural sobre cuerpo oscuro. 2,00 × 0,45 × 0,80 m.',
  },
  {
    name: 'Buffet Lourdes',
    category: 'Buffets y Vajilleros',
    image: '/img/catalogo/buffet-lourdes.webp',
    blurb: 'Vajillero con cajones y puertas sobre base escultórica maciza. 1,47 × 0,48 × 0,75 m.',
  },
]
