import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import Reveal from './Reveal'

function Instagram({ size = 20, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const datos = [
  {
    icon: MapPin,
    label: 'Planta industrial y administración',
    value: 'Castelli 2041 (S3080FSI)\nEsperanza, Santa Fe, Argentina',
  },
  {
    icon: Phone,
    label: 'Teléfono / WhatsApp',
    value: '+54 3496 530698\n+54 3496 420877 / 422653',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: 'info@mehring.com.ar\nmehring@mehring.com.ar',
  },
]

export default function Contacto() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(
      `Consulta web de ${data.get('nombre') || 'cliente'}`,
    )
    const body = encodeURIComponent(
      `Nombre: ${data.get('nombre')}\nEmail: ${data.get('email')}\nTeléfono: ${data.get('telefono')}\n\n${data.get('mensaje')}`,
    )
    window.location.href = `mailto:info@mehring.com.ar?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contacto" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-clay">Contacto</p>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight text-bark sm:text-5xl">
                Pedí el catálogo o coordiná una visita a la fábrica
              </h2>
              <p className="mt-5 text-bark/70 sm:text-lg">
                Vendemos a comercios de muebles de todo el país y atendemos
                consultas de exportación. Escribinos y te contactamos a la
                brevedad.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-col gap-7">
              {datos.map((d, i) => (
                <Reveal key={d.label} delay={i * 0.08} className="flex gap-4">
                  <d.icon
                    size={22}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-clay"
                  />
                  <div>
                    <div className="text-sm font-medium text-bark">
                      {d.label}
                    </div>
                    <p className="mt-1 whitespace-pre-line text-sm text-bark/65">
                      {d.value}
                    </p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.3}>
                <a
                  href="https://www.instagram.com/mehringsillas/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-bark transition-opacity hover:opacity-60"
                >
                  <Instagram size={20} strokeWidth={1.5} />
                  @mehringsillas
                </a>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-cream p-7 sm:p-9"
            >
              <div className="flex flex-col gap-5">
                <Field name="nombre" label="Nombre y empresa" required />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field name="email" label="Email" type="email" required />
                  <Field name="telefono" label="Teléfono" type="tel" />
                </div>
                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-medium text-bark">Mensaje</span>
                  <textarea
                    name="mensaje"
                    rows={4}
                    required
                    className="resize-none rounded-lg border border-bark/15 bg-cream px-3.5 py-2.5 text-bark outline-none transition-colors focus:border-clay"
                    placeholder="Contanos qué modelos te interesan"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-bark px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-ink"
                >
                  <Send size={16} />
                  {sent ? 'Abriendo tu correo…' : 'Enviar consulta'}
                </button>
                <p className="text-xs text-bark/45">
                  El formulario abre tu aplicación de correo con el mensaje listo
                  para enviar.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  name,
  label,
  type = 'text',
  required,
}: {
  name: string
  label: string
  type?: string
  required?: boolean
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-medium text-bark">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-lg border border-bark/15 bg-cream px-3.5 py-2.5 text-bark outline-none transition-colors focus:border-clay"
      />
    </label>
  )
}
