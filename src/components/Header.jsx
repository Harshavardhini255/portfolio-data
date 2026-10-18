import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { meta, nav, socials, status } from '../data/content'
import { useActiveSection } from '../lib/hooks'
import StatusPill from './StatusPill'

/**
 * Reference header: a single fixed row — '@' mark at far left, nav across the
 * middle, "Available for New Project" pill at the right. No bottom border.
 */
export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(nav.map((n) => n.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'border-b border-transparent'
        }`}
      >
        <div className="shell gutter flex items-center justify-between gap-8 py-6 lg:py-7">
          {/* mark */}
          <a href="#index" className="group flex items-center gap-3" aria-label={`${meta.name} — top`}>
            <span
              className={`grid h-8 w-8 place-items-center transition-colors duration-500 ${
                scrolled ? 'bg-ink text-paper' : 'border border-ink text-ink group-hover:bg-ink group-hover:text-paper'
              }`}
            >
              <span className="label text-[0.5rem] tracking-[0.06em]">{meta.monogram}</span>
            </span>
            <span className="hidden text-nav leading-tight sm:block">
              <span className="block font-medium">{meta.name}</span>
              <span className="label mt-1 block text-mist">{meta.role}</span>
            </span>
          </a>

          {/* nav */}
          <nav aria-label="Sections" className="hidden items-center gap-8 lg:flex xl:gap-11">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className="group relative flex items-baseline gap-1.5"
              >
                <span
                  className={`nav-link transition-opacity duration-300 ${
                    active === item.id ? 'opacity-100' : 'opacity-45 group-hover:opacity-100'
                  }`}
                >
                  {item.label}
                </span>
                {item.count != null ? (
                  <span className="label text-mist tabular-nums">({item.count})</span>
                ) : null}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-ink transition-all duration-500 ${
                    active === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <StatusPill label={status.label} href={status.href} className="hidden sm:inline-flex" />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center border border-line lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* mobile sheet */}
      <div
        className={`fixed inset-0 z-40 bg-paper transition-opacity duration-400 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="shell gutter flex h-full flex-col justify-center gap-1 pt-24">
          {nav.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-line py-4"
            >
              <span className="display text-[2.25rem]">{item.label}</span>
              <span className="label text-mist tabular-nums">
                {item.count != null ? `(${item.count})` : String(i + 1).padStart(2, '0')}
              </span>
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                onClick={() => setOpen(false)}
                className="label flex items-center justify-between border-b border-line py-3 text-slate"
              >
                {s.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
