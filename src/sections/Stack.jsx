import { useEffect, useRef, useState } from 'react'
import { skillGroups } from '../data/content'
import SlashTitle from '../components/SlashTitle'
import Reveal from '../components/Reveal'
import { gsap, EASE } from '../lib/motion'

/**
 * The reference's /SERVICE block: a stack of large display rows, each of which
 * expands in place to reveal a paragraph. First row starts open.
 */
export default function Stack() {
  const [open, setOpen] = useState(0)
  const panels = useRef([])

  useEffect(() => {
    panels.current = panels.current.filter(Boolean)
  }, [])

  // animate the panel height on toggle
  useEffect(() => {
    panels.current.forEach((el, i) => {
      if (!el) return
      const isOpen = i === open
      const target = isOpen ? el.scrollHeight : 0
      gsap.to(el, {
        height: target,
        opacity: isOpen ? 1 : 0,
        duration: 0.62,
        ease: EASE,
        overwrite: true,
      })
    })
  }, [open])

  return (
    <section id="stack" className="shell gutter scroll-mt-28 py-24 lg:py-36">
      <SlashTitle
        action={
          <span className="label text-mist tabular-nums">
            {String(skillGroups.length).padStart(2, '0')} services
          </span>
        }
      >
        Stack
      </SlashTitle>

      <Reveal stagger={0.08} className="mt-12 lg:mt-16">
        {skillGroups.map((g, i) => {
          const isOpen = i === open
          return (
            <div key={g.n} className="border-b border-line first:border-t">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-start gap-5 py-7 text-left lg:gap-10 lg:py-9"
              >
                <span className="label mt-[0.6em] shrink-0 text-mist tabular-nums">{g.n}</span>

                <span
                  className={`display flex-1 text-row transition-opacity duration-400 ${
                    isOpen ? 'text-ink' : 'text-ink/35 group-hover:text-ink/70'
                  }`}
                >
                  {g.title}
                </span>

                <span
                  className="mt-[0.35em] grid h-7 w-7 shrink-0 place-items-center border border-line transition-all duration-500 group-hover:border-ink"
                  aria-hidden="true"
                >
                  <span
                    className={`block h-px w-3 bg-current transition-transform duration-500 ${
                      isOpen ? 'rotate-0' : ''
                    }`}
                  />
                  <span
                    className={`absolute block h-3 w-px bg-current transition-transform duration-500 ${
                      isOpen ? 'scale-y-0' : ''
                    }`}
                  />
                </span>
              </button>

              <div
                ref={(el) => {
                  panels.current[i] = el
                }}
                className="overflow-hidden"
                style={{ height: i === 0 ? 'auto' : 0, opacity: i === 0 ? 1 : 0 }}
              >
                <p className="body-copy max-w-[62ch] pr-10 pb-9 pl-[3.1rem] text-graphite lg:pl-[4.4rem]">
                  {g.text}
                </p>
              </div>
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}
