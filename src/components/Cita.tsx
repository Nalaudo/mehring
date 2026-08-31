import Reveal from './Reveal'

export default function Cita() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-cream sm:py-36">
      <img
        src="/img/mesa-lourdes.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-ink/50" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-display text-3xl font-light italic leading-snug sm:text-5xl">
            “Cada detalle fue pensado para marcar la diferencia.”
          </p>
          <p className="mt-6 eyebrow text-oak">
            Sucesores de Gerardo R. Mehring S.A.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
