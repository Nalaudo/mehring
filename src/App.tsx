import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Colecciones from './components/Colecciones'
import Oficio from './components/Oficio'
import Cita from './components/Cita'
import Lustres from './components/Lustres'
import Tapizados from './components/Tapizados'
import Corporativos from './components/Corporativos'
import Profesionales from './components/Profesionales'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import { scrollToId } from './lib/smoothScroll'
import { routeForPath } from './data/routes'

export default function App() {
  // If the page is opened with a #hash or on a section path (/contacto,
  // /banquetas…), ease to it instead of the browser's jump.
  useEffect(() => {
    const hash = window.location.hash
    const id =
      hash.length > 1 ? hash.slice(1) : routeForPath(window.location.pathname)?.section
    if (id) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'auto' })
        setTimeout(() => scrollToId(id, 1100), 60)
      })
    }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Nosotros />
        <Colecciones />
        <Oficio />
        <Cita />
        <Lustres />
        <Tapizados />
        <Corporativos />
        <Profesionales />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
