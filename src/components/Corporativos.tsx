import { Building2, Truck, FileText, Users } from 'lucide-react'
import Reveal from './Reveal'
import { handleAnchorClick } from '../lib/smoothScroll'

const beneficios = [
  {
    icon: Building2,
    title: 'Proyectos completos',
    text: 'Asesoramiento para hotelería, gastronomía y oficinas, desde obra nueva hasta renovaciones.',
  },
  {
    icon: FileText,
    title: 'Precios por volumen',
    text: 'Condiciones especiales según la cantidad de unidades del pedido.',
  },
  {
    icon: Truck,
    title: 'Entregas coordinadas',
    text: 'Planificamos la producción y la logística según los plazos de tu obra.',
  },
  {
    icon: Users,
    title: 'Un contacto dedicado',
    text: 'Un mismo interlocutor para cotizar, coordinar y hacer seguimiento del pedido.',
  },
]

export default function Corporativos() {
  return (
    <section id="corporativos" className="bg-bark py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/img/feria-2017.webp"
                alt="Catálogo de sillas, sillones y mesas Mehring para proyectos corporativos"
                loading="lazy"
                decoding="async"
                className="aspect-4/5 h-full w-full object-cover sm:aspect-3/2 lg:aspect-4/5"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow text-oak">Corporativos</p>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight sm:text-5xl">
                Equipamiento para hotelería, gastronomía y oficinas
              </h2>
              <p className="mt-5 text-cream/70 sm:text-lg">
                Trabajamos con empresas, cadenas hoteleras y estudios de
                arquitectura que necesitan equipar espacios completos, con la
                calidad de fabricación propia de MEHRING® y volúmenes de
                producción a medida del proyecto.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2">
              {beneficios.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.08}>
                  <b.icon size={26} className="text-oak" strokeWidth={1.5} />
                  <h3 className="mt-3 font-display text-lg">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/60">
                    {b.text}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <a
                href="#contacto"
                onClick={(e) => handleAnchorClick(e)}
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-bark transition-colors hover:bg-oak"
              >
                Solicitar cotización corporativa
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
