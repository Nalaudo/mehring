import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { handleAnchorClick } from '../lib/smoothScroll'

const links = [
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'colecciones', label: 'Colecciones' },
  { id: 'lustres', label: 'Lustres' },
  { id: 'tapizados', label: 'Tapizados' },
  { id: 'corporativos', label: 'Corporativos' },
  { id: 'profesionales', label: 'Profesionales' },
  { id: 'contacto', label: 'Contacto' },
]
const sectionIds = links.map((l) => l.id)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(sectionIds)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ease-out ${
        solid
          ? 'border-b border-bark/10 bg-cream shadow-[0_1px_20px_rgba(28,23,18,0.06)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[var(--nav-h)] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          onClick={(e) => handleAnchorClick(e)}
          className="flex items-center gap-3"
          aria-label="Mehring, inicio"
        >
          <Logo
            className={`transition-colors duration-500 ${
              solid ? 'text-bark' : 'text-cream'
            }`}
          />
        </a>

        <ul
          className={`hidden items-center gap-5 text-sm transition-colors duration-500 lg:flex xl:gap-8 ${
            scrolled ? 'text-bark' : 'text-cream'
          }`}
        >
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => handleAnchorClick(e)}
                aria-current={active === l.id ? 'true' : undefined}
                className="group relative block py-1"
              >
                <span
                  className={`transition-opacity duration-300 ${
                    active === l.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                  }`}
                >
                  {l.label}
                </span>
                <span
                  className={`absolute -bottom-0.5 left-0 h-px origin-left bg-current transition-transform duration-300 ease-out ${
                    active === l.id ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          onClick={(e) => handleAnchorClick(e)}
          className={`hidden rounded-full px-5 py-2 text-sm font-medium transition-colors duration-500 lg:inline-block ${
            solid
              ? 'bg-bark text-cream hover:bg-ink'
              : 'bg-cream/95 text-bark hover:bg-cream'
          }`}
        >
          Pedir catálogo
        </a>

        <button
          className={`transition-colors duration-500 lg:hidden ${
            solid ? 'text-bark' : 'text-cream'
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        className={`grid overflow-hidden bg-cream transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1 border-t border-bark/10 px-5 py-4 text-bark">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => handleAnchorClick(e, () => setOpen(false))}
                  className={`block py-3 text-lg transition-colors ${
                    active === l.id ? 'text-clay' : ''
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={(e) => handleAnchorClick(e, () => setOpen(false))}
                className="mt-2 block rounded-full bg-bark px-5 py-3 text-center text-cream"
              >
                Pedir catálogo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
