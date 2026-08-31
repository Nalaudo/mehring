export type Category =
  | 'Sillas'
  | 'Sillones'
  | 'Mesas'
  | 'Buffets'
  | 'Banquetas'
  | 'Futones'

export interface Product {
  name: string
  category: Category
  image: string
  blurb: string
  isNew?: boolean
}

export const categories: Category[] = [
  'Sillas',
  'Sillones',
  'Mesas',
  'Buffets',
  'Banquetas',
  'Futones',
]

export const products: Product[] = [
  {
    name: 'Silla Gala',
    category: 'Sillas',
    image: '/img/silla-gala.webp',
    blurb: 'Respaldo alto y líneas depuradas. El último lanzamiento de la casa.',
    isNew: true,
  },
  {
    name: 'Silla Cocó',
    category: 'Sillas',
    image: '/img/silla-coco.webp',
    blurb: 'Curvas suaves en madera maciza, pensada para acompañar mesas largas.',
    isNew: true,
  },
  {
    name: 'Silla Aldana',
    category: 'Sillas',
    image: '/img/silla-aldana.webp',
    blurb: 'Un clásico contemporáneo: estructura firme y asiento tapizado.',
  },
  {
    name: 'Silla Sofi',
    category: 'Sillas',
    image: '/img/silla-sofi.webp',
    blurb: 'Silueta liviana que se integra a cualquier comedor sin imponerse.',
  },
  {
    name: 'Silla Divi',
    category: 'Sillas',
    image: '/img/silla-divi.webp',
    blurb: 'Respaldo abierto y proporción atemporal. Disponible con respaldo de madera.',
  },
  {
    name: 'Silla Mimy',
    category: 'Sillas',
    image: '/img/silla-mimy.webp',
    blurb: 'Compacta y resistente, ideal para uso intensivo en gastronomía.',
  },
  {
    name: 'Silla Karen',
    category: 'Sillas',
    image: '/img/silla-karen.webp',
    blurb: 'Respaldo envolvente con costura marcada sobre madera lustrada.',
  },
  {
    name: 'Silla Frida',
    category: 'Sillas',
    image: '/img/silla-frida.webp',
    blurb: 'Versión alta de la familia Frida, con carácter y presencia.',
  },
  {
    name: 'Sillón Divi',
    category: 'Sillones',
    image: '/img/sillon-divi.webp',
    blurb: 'La silla Divi con apoyabrazos, para las cabeceras de la mesa.',
  },
  {
    name: 'Sillón Mimy',
    category: 'Sillones',
    image: '/img/sillon-mimy.webp',
    blurb: 'Apoyabrazos integrados sin sumar volumen. Robusto y sobrio.',
  },
  {
    name: 'Sillón Frida',
    category: 'Sillones',
    image: '/img/sillon-frida.webp',
    blurb: 'Confort de sillón con el aire liviano de una silla de comedor.',
  },
  {
    name: 'Butacón Divi',
    category: 'Sillones',
    image: '/img/butacon-divi.webp',
    blurb: 'Butaca amplia y mullida para estar y recibir. Tapizado a elección.',
  },
  {
    name: 'Mesa Lourdes',
    category: 'Mesas',
    image: '/img/mesa-lourdes.webp',
    blurb: 'Tapa maciza de 100 × 200 cm sobre patas macizas. El centro del comedor.',
  },
  {
    name: 'Colección Duca',
    category: 'Mesas',
    image: '/img/mesa-duca-margot.webp',
    blurb: 'Mesa Duca combinada con sillas Margot: un juego completo y coordinado.',
  },
  {
    name: 'Buffet Cata',
    category: 'Buffets',
    image: '/img/buffet-cata.webp',
    blurb: 'Vajillero de líneas rectas con frentes lisos y tiradores ocultos.',
  },
  {
    name: 'Buffet Lourdes',
    category: 'Buffets',
    image: '/img/buffet-lourdes.webp',
    blurb: 'Aparador de 2 metros, a juego con la mesa Lourdes.',
  },
  {
    name: 'Banqueta Estela',
    category: 'Banquetas',
    image: '/img/banqueta-estela.webp',
    blurb: 'Banqueta de barra en altura fija, con reposapiés metálico.',
  },
  {
    name: 'Futón Cruz',
    category: 'Futones',
    image: '/img/futon-cruz.webp',
    blurb: 'Estructura Full modelo Cruz: sofá de día, cama de noche.',
  },
]
