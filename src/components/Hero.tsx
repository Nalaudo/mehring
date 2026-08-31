import { ArrowDownRight } from 'lucide-react'
import { handleAnchorClick } from '../lib/smoothScroll'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      <img
        src="/img/hero-lourdes-sofi.webp"
        alt="Comedor con mesa Lourdes y sillas Sofi de Mehring"
        width={1800}
        height={1201}
        fetchPriority="high"
        decoding="async"
        className="hero-img absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/45 to-ink/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/25 to-transparent" />
      <div className="grain absolute inset-0 opacity-[0.12]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-[var(--nav-h)] sm:px-8 sm:pb-24">
        <p
          className="hero-in eyebrow text-oak"
          style={{ '--hero-delay': '250ms' } as React.CSSProperties}
        >
          Esperanza · Santa Fe · Argentina
        </p>

        <h1
          className="hero-in mt-4 max-w-4xl font-display text-[13vw] font-normal leading-[0.95] text-cream drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] sm:text-7xl lg:text-8xl"
          style={{ '--hero-delay': '380ms' } as React.CSSProperties}
        >
          Desde 1953,
          <br />
          <span className="italic text-oak">sinónimo de sillas</span>
        </h1>

        <p
          className="hero-in mt-6 max-w-xl text-lg text-cream/85"
          style={{ '--hero-delay': '520ms' } as React.CSSProperties}
        >
          La primera fábrica de sillas en serie de Argentina. Madera noble,
          diseño exclusivo y un oficio que se transmite de generación en
          generación.
        </p>

        <div
          className="hero-in mt-9 flex flex-wrap items-center gap-4"
          style={{ '--hero-delay': '660ms' } as React.CSSProperties}
        >
          <a
            href="#colecciones"
            onClick={(e) => handleAnchorClick(e)}
            className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-bark transition-colors hover:bg-oak"
          >
            Ver colecciones
            <ArrowDownRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>
          <a
            href="#contacto"
            onClick={(e) => handleAnchorClick(e)}
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
          >
            Contactar a la fábrica
          </a>
        </div>
      </div>
    </section>
  )
}
