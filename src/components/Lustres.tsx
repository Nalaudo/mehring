import Reveal from './Reveal'

// Fotos reales del muestrario (PDF "Nuestros Lustres Mehring"), en public/img/lustres/<código>.webp
const tradicionales = [
  { code: '02', name: 'Roble Natural' },
  { code: '09', name: 'Haya' },
  { code: '11', name: 'Cherry Antiguo' },
  { code: '10', name: 'Cerezo' },
  { code: '18', name: 'Habano' },
  { code: '13', name: 'Chocolate' },
  { code: '19', name: 'Tabaco' },
  { code: '16', name: 'Castaño' },
  { code: '33', name: 'Petiribí' },
]

const especiales = [
  { code: '24', name: 'Blanco Mate' },
  { code: '12', name: 'Blanco Brillante' },
  { code: '28', name: 'Restoration' },
  { code: '29', name: 'Bone' },
  { code: '25', name: 'Colonial' },
  { code: '21', name: 'Negro' },
]

const consideraciones = [
  'Las muestras de lustre físicas están aplicadas sobre madera de Guatambú, por lo tanto su aplicación sobre otras maderas no va a tener la misma apreciación.',
  'A excepción del color BLANCO que también se realiza en terminación BRILLANTE, y la línea EUSHI (en madera de Petiribí) que se realiza en terminación EXTRA MATE, las demás terminaciones convencionales son SEMI-MATE.',
  'Las pátinas son técnicas “artesanales” es por ello que los resultados son extremadamente versátiles entre producciones.',
  'Todos los tipos de colores del muestrario son visiblemente distintos entre sí.',
  'Las tintas son uniformes, esto no significa que no haya variabilidad en un mismo color ya que entran en juego distintas variables como la tonalidad y el veteado de la madera, la temperatura y humedad del ambiente, entre otras.',
  'Realizamos colores y terminaciones especiales a pedido. En lo posible necesitaremos la muestra física, y si es a través de una foto tener en cuenta que las pantallas no representan los colores reales. No siempre se puede copiar el color exactamente igual.',
  'Para los PRECIOS de los productos, los lustres se diferencian en TRADICIONALES: 02-09-10-11-13-16-18-19-33 y ESPECIALES: 25-28-29-21-12-24',
]

function Swatch({ code, name }: { code: string; name: string }) {
  return (
    <figure>
      <div className="relative aspect-square overflow-hidden rounded-xl border border-bark/10 shadow-sm">
        <img
          src={`/img/lustres/${code}.webp`}
          alt={`Lustre ${name} ${code}`}
          width={480}
          height={480}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="mt-2 text-xs text-bark/60">
        <span className="font-medium text-bark">{code}</span> · {name}
      </figcaption>
    </figure>
  )
}

export default function Lustres() {
  return (
    <section id="lustres" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-4xl font-light leading-tight text-bark sm:text-5xl">
            Lustres
          </h2>
          <p className="mt-5 text-bark/70 sm:text-lg">
            En Mehring, todos nuestros productos se lustran con sistemas
            poliuretanicos libres de Tolueno y Benceno, lo que asegura una
            excelente adherencia, máxima durabilidad, impermeabilidad y fácil
            limpieza, aumentando su vida útil.
          </p>
          <p className="mt-5 text-bark/70 sm:text-lg">
            Presentamos, a través de muestrarios, 14 tipos de colores
            diferentes en terminación como modo de REFERENCIA:
          </p>
          <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-bark/70">
            <li>NEGRO 21, BLANCO 24 y CHOCOLATE 13 con opacidad 100%</li>
            <li>BONE 29 Y RESTORATION 28 en formato de PATINAS</li>
            <li>
              HAYA 09, CEREZO 10, ROBLE NATURAL 02, CHERRY ANTIGUO 11, HABANO
              18, COLONIAL 28, TABACO 19, PETIRIBÍ 33 y CASTAÑO 16 como tinta
              de base y terminación transparente.
            </li>
          </ul>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <h3 className="font-display text-2xl text-bark">Tradicionales</h3>
          </Reveal>
          <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-9">
            {tradicionales.map((c, i) => (
              <Reveal key={c.code} delay={i * 0.03}>
                <Swatch {...c} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Reveal>
            <h3 className="font-display text-2xl text-bark">
              Especiales (lacas y pátinas)
            </h3>
          </Reveal>
          <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-6">
            {especiales.map((c, i) => (
              <Reveal key={c.code} delay={i * 0.03}>
                <Swatch {...c} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 max-w-3xl">
            <h3 className="font-display text-2xl text-bark">
              Consideraciones generales
            </h3>
            <ul className="mt-5 flex list-disc flex-col gap-2.5 pl-5 text-sm leading-relaxed text-bark/70">
              {consideraciones.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-bark/70">
              Ante cualquier duda sobre cuestiones técnicas, maderas, tapizados
              y lustres puede comunicarse directamente por Whatsapp al{' '}
              <a
                href="https://wa.me/5493496511429"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-bark underline decoration-bark/30 underline-offset-2 hover:decoration-bark"
              >
                3496511429
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
