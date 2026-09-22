import { Ruler, Palette, Percent, Hammer } from 'lucide-react'
import Reveal from './Reveal'
import { handleAnchorClick } from '../lib/smoothScroll'

const beneficios = [
  {
    icon: Ruler,
    title: 'Fichas técnicas',
    text: 'Medidas, materiales y detalles constructivos de cada modelo, listos para tus planos y presentaciones.',
  },
  {
    icon: Palette,
    title: 'Muestras a pedido',
    text: 'Te acercamos muestras de lustres y telas para definir la terminación de cada proyecto.',
  },
  {
    icon: Percent,
    title: 'Condiciones preferenciales',
    text: 'Precios diferenciales para arquitectos, diseñadores de interiores y decoradores.',
  },
  {
    icon: Hammer,
    title: 'Piezas a medida',
    text: 'Adaptamos medidas, maderas y terminaciones cuando el proyecto lo requiere.',
  },
]

export default function Profesionales() {
  return (
    <section id="profesionales" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="eyebrow text-clay">Profesionales</p>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight text-bark sm:text-5xl">
                Un aliado para arquitectos, diseñadores y decoradores
              </h2>
              <p className="mt-5 text-bark/70 sm:text-lg">
                Sumate al programa de profesionales de MEHRING® y contá con
                fichas técnicas, muestras y condiciones pensadas para
                acompañar tus proyectos de principio a fin.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2">
              {beneficios.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.08}>
                  <b.icon size={26} className="text-clay" strokeWidth={1.5} />
                  <h3 className="mt-3 font-display text-lg text-bark">
                    {b.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-bark/60">
                    {b.text}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <a
                href="#contacto"
                onClick={(e) => handleAnchorClick(e)}
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-bark px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-ink"
              >
                Sumarme al programa de profesionales
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/img/hero-lourdes-mesa.webp"
                alt="Mesa Lourdes en un proyecto de interiorismo"
                loading="lazy"
                decoding="async"
                className="aspect-4/5 h-full w-full object-cover sm:aspect-3/2 lg:aspect-4/5"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
