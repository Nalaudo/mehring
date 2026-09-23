import Reveal from "./Reveal";

const stats = [
  { value: "1953", label: "Año de fundación" },
  { value: "+70", label: "Años de oficio" },
  { value: "3.700 m²", label: "Plantas productivas cubiertas" },
  { value: "~40", label: "Personas en planta" },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-clay">Nosotros</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-bark sm:text-5xl">
              Un pequeño taller que se volvió la primera fábrica de sillas del
              país
            </h2>
          </Reveal>

          <Reveal
            delay={0.1}
            className="flex flex-col gap-5 text-bark/75 sm:text-lg"
          >
            <p>
              MEHRING® fue fundada por Gerardo Remigio Mehring, un visionario
              que en 1953 dio sus primeros pasos con una pequeña carpintería en
              Esperanza, provincia de Santa Fe. Con el paso de los años, aquel
              taller se transformó en{" "}
              <span className="text-bark">
                la primera fábrica de sillas en serie de la Argentina
              </span>
              , marcando un hito en la industria del mueble nacional.
            </p>
            <p>
              Hoy contamos con dos plantas productivas: una de 1.200 m²
              destinada al secado y la fabricación de estructuras de madera, y
              otra de 2.500 m² donde se realizan el lustre, el tapizado, el
              embalaje y la expedición. Empleamos en forma directa a casi 40
              personas, todas con una alta calificación en el oficio.
            </p>
            <p>
              Nuestra producción está enfocada en sillas, como desde la
              fundación, y hoy también provee sillones, poltronas, mesas de
              comedor y vajilleros a todo el territorio argentino. Participamos
              en las ferias nacionales e internacionales más importantes del
              sector, donde logramos distinciones por nuestros productos y por
              la forma de presentarlos.
            </p>
            <p>
              Por eso, después de más de siete décadas de historia, podemos
              afirmar con orgullo que MEHRING® es{" "}
              <span className="text-bark">"Sinónimo de Sillas"</span> en la
              Argentina.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 gap-10 lg:items-center lg:gap-16">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-bark/10 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className="bg-cream p-7 sm:p-9"
              >
                <div className="font-display text-4xl font-light text-clay sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-bark/60">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
