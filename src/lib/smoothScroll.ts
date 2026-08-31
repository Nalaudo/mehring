const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

/** Distance in px from the top used as breathing room below the fixed nav. */
function navOffset() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
  const px = parseFloat(raw) || 72
  // --nav-h is in rem; convert if needed
  return raw.includes('rem') ? px * 16 : px
}

let rafId = 0

/**
 * Eased scroll to a target (element id like "#colecciones", or "#top" / 0).
 * Cancels itself if the user scrolls manually mid-animation.
 */
export function scrollToId(target: string, duration = 850) {
  cancelAnimationFrame(rafId)

  const id = target.replace(/^#/, '')
  const el = id === 'top' ? null : document.getElementById(id)
  const startY = window.scrollY
  const rawDest = el ? startY + el.getBoundingClientRect().top - navOffset() + 4 : 0
  const maxY = document.documentElement.scrollHeight - window.innerHeight
  const destY = Math.max(0, Math.min(rawDest, maxY))
  const dist = destY - startY

  if (Math.abs(dist) < 2) return

  if (prefersReducedMotion()) {
    window.scrollTo({ top: destY, behavior: 'auto' })
    return
  }

  const start = performance.now()
  let userInterrupted = false
  const onWheelOrTouch = () => {
    userInterrupted = true
  }
  window.addEventListener('wheel', onWheelOrTouch, { passive: true, once: true })
  window.addEventListener('touchstart', onWheelOrTouch, { passive: true, once: true })

  const step = (now: number) => {
    if (userInterrupted) {
      cleanup()
      return
    }
    const t = Math.min(1, (now - start) / duration)
    window.scrollTo({ top: startY + dist * easeInOutCubic(t), behavior: 'auto' })
    if (t < 1) {
      rafId = requestAnimationFrame(step)
    } else {
      cleanup()
    }
  }

  const cleanup = () => {
    window.removeEventListener('wheel', onWheelOrTouch)
    window.removeEventListener('touchstart', onWheelOrTouch)
  }

  rafId = requestAnimationFrame(step)
}

/** Click handler for in-page anchor links. */
export function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  onDone?: () => void,
) {
  const href = e.currentTarget.getAttribute('href')
  if (!href?.startsWith('#')) return
  e.preventDefault()
  scrollToId(href)
  history.replaceState(null, '', href === '#top' ? ' ' : href)
  onDone?.()
}
