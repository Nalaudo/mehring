import Reveal from './Reveal'

const stats = [
  { value: '1953', label: 'Año de fundación' },
  { value: '+70', label: 'Años de oficio' },
  { value: '5.000 m²', label: 'Planta industrial cubierta' },
  { value: '+20', label: 'Años exportando al mundo' },
]

export default function Historia() {
  return (
    <section id="historia" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-clay">Nuestra historia</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-bark sm:text-5xl">
              Un pequeño taller que se volvió la primera fábrica de sillas del
              país
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-5 text-bark/75 sm:text-lg">
            <p>
              MEHRING® fue fundada por Gerardo Remigio Mehring, un soñador e
              incansable trabajador que en 1953 comenzó con su pequeña
              carpintería en Esperanza, provincia de Santa Fe.
            </p>
            <p>
              Con los años convirtió ese taller en la{' '}
              <span className="text-bark">
                primera fábrica de sillas en serie de la Argentina
              </span>
              . Desde 1994 la conducción está en manos de sus sucesores, y la
              empresa emplea de forma directa a casi 50 personas, todas con una
              alta calificación en el oficio.
            </p>
            <p>
              Hoy MEHRING® marca tendencia en sillas y lleva su producción a
              todo el territorio argentino y a los mercados internacionales más
              competitivos del mundo.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-bark/10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="bg-cream p-7 sm:p-9"
            >
              <div className="font-display text-4xl font-light text-clay sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-bark/60">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
