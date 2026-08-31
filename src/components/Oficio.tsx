import { TreePine, Flame, Paintbrush, Scissors } from 'lucide-react'
import Reveal from './Reveal'

const steps = [
  {
    icon: TreePine,
    title: 'Selección de la madera',
    text: 'Toda la materia prima pasa por un riguroso control de calidad y un proceso de selección antes de entrar a planta.',
  },
  {
    icon: Flame,
    title: 'Secado en horno',
    text: 'La madera se somete a un secado en horno adecuado, que le da estabilidad y evita movimientos futuros.',
  },
  {
    icon: Paintbrush,
    title: 'Lustre y laca',
    text: 'Diferentes tonos de lustre y lacas poliuretánicas, aplicados a mano, definen la terminación de cada pieza.',
  },
  {
    icon: Scissors,
    title: 'Tapicería propia',
    text: 'Taller de tapicería con una amplia variedad de telas, para vestir cada modelo a medida del cliente.',
  },
]

export default function Oficio() {
  return (
    <section id="oficio" className="bg-bark py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/img/hero-lourdes-mimy.jpg"
                alt="Ambiente de comedor Mehring"
                loading="lazy"
                className="aspect-4/5 h-full w-full object-cover sm:aspect-3/2 lg:aspect-4/5"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow text-oak">El oficio</p>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight sm:text-5xl">
                Tecnología europea, manos que conocen la madera
              </h2>
              <p className="mt-5 text-cream/70 sm:text-lg">
                La planta combina maquinaria automática y semiautomática de
                origen europeo con el trabajo de operarios altamente
                calificados. Fabricación, lustre, tapicería, expedición y
                depósito, todo bajo un mismo techo en Esperanza.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <s.icon size={26} className="text-oak" strokeWidth={1.5} />
                  <h3 className="mt-3 font-display text-lg">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/60">
                    {s.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
