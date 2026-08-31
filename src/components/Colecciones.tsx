import { useMemo, useState } from 'react'
import Reveal from './Reveal'
import { categories, products, type Category } from '../data/products'

type Filter = 'Todos' | Category

const filters: Filter[] = ['Todos', ...categories]

export default function Colecciones() {
  const [active, setActive] = useState<Filter>('Todos')

  const visible = useMemo(
    () =>
      active === 'Todos'
        ? products
        : products.filter((p) => p.category === active),
    [active],
  )

  return (
    <section id="colecciones" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">Colecciones</p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-bark sm:text-5xl">
            Sillas, sillones y muebles de comedor con diseño propio
          </h2>
          <p className="mt-5 text-bark/70 sm:text-lg">
            Cada modelo se ofrece en distintos tonos de lustre y lacas
            poliuretánicas, con una amplia carta de telas para tapicería.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                active === f
                  ? 'border-bark bg-bark text-cream'
                  : 'border-bark/20 text-bark/70 hover:border-bark/50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div
          key={active}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((p, i) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl bg-cream shadow-sm"
              style={{
                animation: `fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both`,
                animationDelay: `${Math.min(i, 8) * 45}ms`,
              }}
            >
              <div className="relative aspect-4/5 overflow-hidden bg-sand">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {p.isNew && (
                  <span className="absolute left-4 top-4 rounded-full bg-clay px-3 py-1 text-xs font-medium tracking-wide text-cream">
                    Nuevo
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl text-bark">{p.name}</h3>
                  <span className="text-xs uppercase tracking-wider text-bark/40">
                    {p.category}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-bark/60">
                  {p.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
