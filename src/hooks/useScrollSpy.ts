import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently dominating the viewport.
 * `ids` are plain element ids (no leading '#').
 */
export function useScrollSpy(ids: string[], offset = 96) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (!els.length) return

    const compute = () => {
      const line = window.scrollY + offset
      let current = ''
      for (const el of els) {
        if (el.offsetTop <= line) current = el.id
      }
      // Near the very bottom, force-select the last section.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        current = els[els.length - 1].id
      }
      setActive(current)
    }

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        compute()
        ticking = false
      })
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return active
}
