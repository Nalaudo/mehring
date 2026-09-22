import Reveal from './Reveal'

const variantes = [
  {
    step: '1',
    title: 'Estructura',
    text: 'Producto sin lustrar ni tapizar.',
  },
  {
    step: '2',
    title: 'Con lustre y tapizado — "Sin tela"',
    text: 'Producto lustrado y medio tapizado; tela provista por el cliente.',
  },
  {
    step: '3',
    title: 'Grado "A"',
    text: 'Producto lustrado y tapizado con tela de grado alto.',
  },
  {
    step: '4',
    title: 'Grado "B"',
    text: 'Producto lustrado y tapizado con tela o ecocuero de grado medio.',
  },
]

const gradoA = ['Mecha', 'Panne', 'Areia', 'Lajuerga', 'Chispa', 'Shot', 'Lagherta', 'EcoLino', 'Glasgow']
const gradoB = ['Talampaya', 'Torino', 'Cuerotex', 'Cowboy', 'Donn', 'Tromso']

export default function Tapizados() {
  return (
    <section id="tapizados" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">Tapizados</p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-bark sm:text-5xl">
            Un mismo modelo, distintas variantes
          </h2>
          <p className="mt-5 text-bark/70 sm:text-lg">
            Cada silla, sillón o banqueta puede fabricarse a medida de las
            necesidades de cada cliente, combinando estructura, lustre y
            tapizado.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {variantes.map((v, i) => (
            <Reveal key={v.step} delay={i * 0.08}>
              <span className="font-display text-3xl font-light text-clay">
                {v.step}
              </span>
              <h3 className="mt-2 font-display text-lg text-bark">{v.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-bark/60">
                {v.text}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-10 rounded-2xl bg-cream p-7 sm:p-9 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow text-clay">Grado A</p>
            <h3 className="mt-3 font-display text-2xl text-bark">
              Telas de grado alto
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {gradoA.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-bark/15 px-3.5 py-1.5 text-sm text-bark/75"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-clay">Grado B</p>
            <h3 className="mt-3 font-display text-2xl text-bark">
              Telas y ecocueros de grado medio
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {gradoB.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-bark/15 px-3.5 py-1.5 text-sm text-bark/75"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-3xl text-sm text-bark/55">
            Referencia orientativa: el listado de telas vigentes puede variar
            y las pantallas no representan el color y la textura reales —
            consultá disponibilidad, muestras físicas y precios con nuestro
            equipo comercial.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
