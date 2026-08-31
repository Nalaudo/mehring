import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Historia from './components/Historia'
import Colecciones from './components/Colecciones'
import Oficio from './components/Oficio'
import Cita from './components/Cita'
import Terminaciones from './components/Terminaciones'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import { scrollToId } from './lib/smoothScroll'

export default function App() {
  // If the page is opened with a #hash, ease to it instead of the browser's jump.
  useEffect(() => {
    const hash = window.location.hash
    if (hash.length > 1) {
      const id = hash.slice(1)
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
        <Historia />
        <Colecciones />
        <Oficio />
        <Cita />
        <Terminaciones />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
