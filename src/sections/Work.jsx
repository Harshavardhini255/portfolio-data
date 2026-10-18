import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects, workFilters, workIntro } from '../data/content'
import SlashTitle from '../components/SlashTitle'
import ProjectVisual from '../components/ProjectVisual'
import Reveal from '../components/Reveal'

export default function Work() {
  const [filter, setFilter] = useState('all')

  const shown = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.kind === filter)),
    [filter],
  )

  return (
    <section id="work" className="relative left-1/2 mt-24 w-screen -translate-x-1/2 scroll-mt-28 lg:mt-32">
      <div className="bg-ink py-24 text-paper lg:py-36">
        <div className="shell gutter">
          <SlashTitle
            invert
            action={
              <span className="label text-white/40 tabular-nums">
                {String(shown.length).padStart(2, '0')} of {String(projects.length).padStart(2, '0')}
              </span>
            }
          >
            Selected Work
          </SlashTitle>

          {/* filter row — left pills, right link, as in the reference */}
          <div className="mt-9 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {workFilters.map((f) => {
                const on = filter === f.id
                return (
                  <li key={f.id}>
                    <button
                      type="button"
                      onClick={() => setFilter(f.id)}
                      aria-pressed={on}
                      className={`label transition-colors duration-300 ${
                        on ? 'text-white' : 'text-white/35 hover:text-white/80'
                      }`}
                    >
                      {f.label}
                      {on ? <span className="ml-1.5 text-white/40">({shown.length})</span> : null}
                    </button>
                  </li>
                )
              })}
            </ul>

            <a
              href="#work"
              className="group label flex items-center gap-2 text-white/60 transition-colors hover:text-white"
            >
              View all work
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* statement line above the grid */}
          <Reveal className="mt-16 lg:mt-24">
            <p className="display max-w-[16ch] text-[clamp(1.75rem,3.4vw,3.25rem)] text-white/90">
              {workIntro}
            </p>
          </Reveal>

          {/* grid */}
          <Reveal stagger={0.07} className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-8">
            {shown.map((p, i) => {
              const Tag = p.href ? 'a' : 'article'
              return (
                <Tag
                  key={p.title}
                  {...(p.href ? { href: p.href, target: '_blank', rel: 'noreferrer' } : {})}
                  className="group flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <ProjectVisual seed={i} title={p.title} />
                    <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
                  </div>

                  <div className="flex flex-1 flex-col pt-6">
                    <div className="flex items-baseline justify-between gap-4">
                      {/* oversized index numeral, the reference's signature */}
                      <span className="display text-numeral leading-none text-white/12 tabular-nums">
                        {p.n}
                      </span>
                      <span className="label shrink-0 text-white/35 tabular-nums">{p.year}</span>
                    </div>

                    <h3 className="mt-5 text-lead leading-[1.15] font-medium text-white">{p.title}</h3>
                    <p className="label mt-3 text-white/40">{p.category}</p>

                    <p className="body-copy mt-5 text-white/55">{p.desc}</p>

                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <li key={t} className="label rounded-full border border-white/15 px-2.5 py-1.5 text-white/50">
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                      <span className="label max-w-[26ch] leading-[1.7] text-white/35">{p.stack}</span>
                      {p.href ? (
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 transition-all duration-400 group-hover:border-white group-hover:bg-white group-hover:text-ink">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      ) : null}
                    </div>
                  </div>
                </Tag>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
