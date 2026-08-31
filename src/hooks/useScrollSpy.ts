import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently dominating the viewport.
 * `ids` are plain element ids (no leading '#').
 *
 * Section offsets are measured once (and on resize / layout settle) and cached,
 * so the scroll handler never touches layout — avoids forced reflows.
 */
export function useScrollSpy(ids: string[], offset = 96) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (!els.length) return

    let tops: { id: string; top: number }[] = []
    const measure = () => {
      tops = els
        .map((el) => ({ id: el.id, top: el.getBoundingClientRect().top + window.scrollY }))
        .sort((a, b) => a.top - b.top)
      update()
    }

    const update = () => {
      const line = window.scrollY + offset
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      let current = ''
      for (const s of tops) if (s.top <= line) current = s.id
      if (atBottom && tops.length) current = tops[tops.length - 1].id
      setActive(current)
    }

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        update()
        ticking = false
      })
    }

    measure()
    // Re-measure after fonts / lazy images settle the layout.
    const settle = window.setTimeout(measure, 1200)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      window.clearTimeout(settle)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
    }
  }, [ids, offset])

  return active
}
