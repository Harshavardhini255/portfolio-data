import { experience, meta } from '../data/content'
import SlashTitle from '../components/SlashTitle'
import Reveal from '../components/Reveal'

/**
 * The reference's /EXPERIENCE block: an inverted, table-like list where each
 * row sets the organisation over the role on the left and the date range
 * flush right.
 */
export default function Experience() {
  return (
    <section id="experience" className="shell gutter scroll-mt-28 py-24 lg:py-36">
      <SlashTitle
        action={
          <span className="label flex items-center gap-2 text-mist tabular-nums">
            <span className="text-ink">3+</span> roles of experience
          </span>
        }
      >
        Experience
      </SlashTitle>

      <div className="mt-12 lg:mt-16">
        <Reveal stagger={0.08} className="[&>*]:border-t [&>*]:border-line last:[&>*]:border-b">
          {experience.map((job) => (
            <article
              key={job.company}
              className="group grid gap-x-8 gap-y-5 py-8 transition-colors duration-500 hover:bg-bone lg:grid-cols-12 lg:py-10"
            >
              <div className="lg:col-span-5">
                <h3 className="text-lead leading-tight font-medium">{job.company}</h3>
                <p className="body-copy mt-1.5 text-graphite">
                  {job.role} · {job.place}
                </p>
              </div>

              <ul className="space-y-3.5 lg:col-span-5">
                {job.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-3.5 text-body leading-[1.65] text-graphite">
                    <span className="label mt-[0.45em] shrink-0 text-mist tabular-nums">
                      {String(bi + 1).padStart(2, '0')}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="lg:col-span-2 lg:text-right">
                <span className="label text-slate tabular-nums">{job.period}</span>
                <span className="label mt-3 block text-mist">{job.highlight}</span>
              </div>
            </article>
          ))}
        </Reveal>
      </div>

      {/* dark band — mirrors the reference's inverted experience page */}
      <Reveal className="mt-16 lg:mt-24" y={36}>
        <div className="bg-ink px-7 py-12 text-paper lg:px-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <p className="display text-[clamp(1.5rem,3.4vw,3rem)] text-white lg:col-span-6">
              Numbers I moved, not just numbers I read.
            </p>
            <dl className="grid grid-cols-2 gap-8 lg:col-span-5 lg:col-start-8">
              {[
                ['40%', 'less manual reporting'],
                ['25%', 'higher data accuracy'],
                ['30%', 'faster query execution'],
                ['20%', 'reporting improvement'],
              ].map(([v, l]) => (
                <div key={l} className="border-t border-white/20 pt-3">
                  <dt className="display text-[clamp(1.5rem,3vw,2.5rem)] tabular-nums">{v}</dt>
                  <dd className="label mt-2.5 text-white/50">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="label mt-12 text-white/35">
            {meta.name} — {meta.location}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
