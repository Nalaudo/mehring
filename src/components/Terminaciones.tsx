import Reveal from './Reveal'

const lustres = [
  { name: 'Natural', hex: '#d8b98a' },
  { name: 'Miel', hex: '#c58f4d' },
  { name: 'Cedro', hex: '#a5652f' },
  { name: 'Nogal', hex: '#6f4322' },
  { name: 'Wengué', hex: '#3d2a1c' },
  { name: 'Negro', hex: '#1c1712' },
  { name: 'Blanco', hex: '#f2ece0' },
  { name: 'Gris piedra', hex: '#8a8377' },
]

const telas = [
  { name: 'Lino crudo', hex: '#e7ddc9' },
  { name: 'Pana verde', hex: '#586152' },
  { name: 'Bouclé arena', hex: '#cdbba0' },
  { name: 'Chenille tabaco', hex: '#8a5a3c' },
  { name: 'Terciopelo petróleo', hex: '#2f4a4d' },
  { name: 'Ecocuero negro', hex: '#211f1d' },
]

export default function Terminaciones() {
  return (
    <section id="terminaciones" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">Terminaciones</p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-bark sm:text-5xl">
            Un mismo modelo, muchas personalidades
          </h2>
          <p className="mt-5 text-bark/70 sm:text-lg">
            Elegí el tono de lustre y la tela de tapizado. Las muestras son
            orientativas: pedí la carta física de terminaciones para ver el
            color y la textura reales.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-2xl text-bark">Tonos de lustre</h3>
            <div className="mt-6 grid grid-cols-4 gap-4 sm:grid-cols-4">
              {lustres.map((c) => (
                <figure key={c.name}>
                  <div
                    className="aspect-square rounded-xl border border-bark/10 shadow-sm"
                    style={{ backgroundColor: c.hex }}
                  />
                  <figcaption className="mt-2 text-xs text-bark/60">
                    {c.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display text-2xl text-bark">Telas de tapicería</h3>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {telas.map((c) => (
                <figure key={c.name}>
                  <div
                    className="aspect-square rounded-xl border border-bark/10 shadow-sm"
                    style={{ backgroundColor: c.hex }}
                  />
                  <figcaption className="mt-2 text-xs text-bark/60">
                    {c.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
