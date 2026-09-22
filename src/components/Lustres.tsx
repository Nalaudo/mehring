import Reveal from './Reveal'

const tradicionales = [
  { code: '02', name: 'Roble Natural', hex: '#c9a06a' },
  { code: '09', name: 'Haya', hex: '#e0b563' },
  { code: '10', name: 'Cerezo', hex: '#b5651d' },
  { code: '11', name: 'Cherry Antiguo', hex: '#6b5c3e' },
  { code: '18', name: 'Habano', hex: '#2a1f18' },
  { code: '13', name: 'Chocolate', hex: '#3b1f1a' },
  { code: '19', name: 'Tabaco', hex: '#4a2e1e' },
  { code: '16', name: 'Castaño', hex: '#c9a874' },
  { code: '33', name: 'Petiribí', hex: '#d8bf8e' },
]

const especiales = [
  { code: '24', name: 'Blanco Mate', hex: '#f2efe9' },
  { code: '12', name: 'Blanco Brillante', hex: '#e8e6df' },
  { code: '28', name: 'Restoration', hex: '#b9b6ad' },
  { code: '29', name: 'Bone', hex: '#e5e1d6' },
  { code: '25', name: 'Colonial', hex: '#7a3420' },
  { code: '21', name: 'Negro', hex: '#0d0b09' },
]

function isLight(hex: string) {
  return ['#c9a06a', '#e0b563', '#c9a874', '#d8bf8e', '#f2efe9', '#e8e6df', '#b9b6ad', '#e5e1d6'].includes(hex)
}

function Swatch({ code, name, hex }: { code: string; name: string; hex: string }) {
  return (
    <figure>
      <div
        className="relative flex aspect-square items-end rounded-xl border border-bark/10 p-2 shadow-sm"
        style={{ backgroundColor: hex }}
      >
        <span
          className={`text-xs font-medium ${isLight(hex) ? 'text-bark' : 'text-cream'}`}
        >
          {code}
        </span>
      </div>
      <figcaption className="mt-2 text-xs text-bark/60">{name}</figcaption>
    </figure>
  )
}

export default function Lustres() {
  return (
    <section id="lustres" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/img/lustres.webp"
                alt="Muestrario de tonos de lustre Mehring"
                loading="lazy"
                decoding="async"
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <p className="eyebrow text-clay">Lustres</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-bark sm:text-5xl">
              14 tonos, aplicados a mano sobre madera maciza
            </h2>
            <p className="mt-5 text-bark/70 sm:text-lg">
              Todos nuestros productos se lustran con sistemas poliuretánicos
              libres de tolueno y benceno, que aseguran una excelente
              adherencia, máxima durabilidad, impermeabilidad y fácil
              limpieza.
            </p>
          </Reveal>
        </div>

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
              Especiales — lacas y pátinas
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

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-3xl text-sm text-bark/55">
            Las muestras físicas están aplicadas sobre madera de Guatambú, por
            lo que su apreciación sobre otras maderas puede variar, y las
            pantallas tampoco representan el color real. La distinción entre
            tonos Tradicionales y Especiales también define el precio final
            del mueble. Realizamos colores y terminaciones especiales a
            pedido — consultá por WhatsApp al{' '}
            <span className="text-bark">+54 3496 511429</span>.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
