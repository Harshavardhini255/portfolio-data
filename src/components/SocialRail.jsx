import { socials } from '../data/content'
import { useScrollProgress, useLocalTime } from '../lib/hooks'

/**
 * Fixed vertical strip on the right edge — social links stacked, as in the
 * reference (Dribbble / Instagram / LinkedIn / Behance). Collapses under lg.
 */
export default function SocialRail() {
  const progress = useScrollProgress()
  const time = useLocalTime()

  return (
    <aside className="pointer-events-none fixed top-1/2 right-[max(1.25rem,calc((100vw-1440px)/2+1.25rem))] z-40 hidden -translate-y-1/2 flex-col items-center gap-6 lg:flex">
      <span className="label text-mist tabular-nums">{time} IST</span>

      <span className="h-16 w-px bg-line" aria-hidden="true">
        <span
          className="block w-px bg-ink transition-[height] duration-150 ease-linear"
          style={{ height: `${progress * 100}%` }}
        />
      </span>

      <ul className="pointer-events-auto flex flex-col items-center gap-5">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="group flex flex-col items-center gap-2"
            >
              <span className="label text-mist transition-colors duration-300 group-hover:text-ink">
                {s.label}
              </span>
              <span className="h-px w-4 bg-line transition-all duration-400 group-hover:w-7 group-hover:bg-ink" />
            </a>
          </li>
        ))}
      </ul>

      <span className="label text-mist tabular-nums">{String(Math.round(progress * 100)).padStart(3, '0')}</span>
    </aside>
  )
}
