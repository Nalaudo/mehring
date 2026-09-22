import { Logo } from './Logo'
import { handleAnchorClick } from '../lib/smoothScroll'

const navLinks = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#colecciones', label: 'Colecciones' },
  { href: '#lustres', label: 'Lustres' },
  { href: '#tapizados', label: 'Tapizados' },
  { href: '#corporativos', label: 'Corporativos' },
  { href: '#profesionales', label: 'Profesionales' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-ink py-14 text-cream/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <a href="#top" onClick={(e) => handleAnchorClick(e)} aria-label="Ir al inicio">
              <Logo className="text-cream" />
            </a>
            <p className="mt-4 text-sm text-cream/50">
              Fábrica de sillas de madera. Industria Argentina desde 1953.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchorClick(e)}
                className="transition-colors hover:text-cream"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/mehringsillas/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-cream"
            >
              Instagram
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sucesores de Gerardo R. Mehring S.A.</p>
          <p>Castelli 2041, Esperanza, Santa Fe · Argentina</p>
        </div>
      </div>
    </footer>
  )
}
