interface LogoProps {
  className?: string
}

/** Wordmark: "MEHRING" set in the display serif with a small ® */
export function Logo({ className }: LogoProps) {
  return (
    <span
      className={`font-display text-2xl font-semibold tracking-[0.2em] leading-none ${className ?? ''}`}
    >
      MEHRING
      <sup className="ml-0.5 text-[0.5em] tracking-normal align-super">®</sup>
    </span>
  )
}
