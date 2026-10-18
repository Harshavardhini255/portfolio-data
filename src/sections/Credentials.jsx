import { activities, certifications, education, interests, skillTags } from '../data/content'
import SlashTitle from '../components/SlashTitle'
import Reveal from '../components/Reveal'

export default function Credentials() {
  return (
    <section id="credentials" className="shell gutter scroll-mt-28 py-24 lg:py-36">
      <SlashTitle
        action={
          <span className="label text-mist tabular-nums">
            {String(certifications.length).padStart(2, '0')} certifications
          </span>
        }
      >
        Resume
      </SlashTitle>

      <div className="mt-12 grid gap-16 lg:mt-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <h3 className="label text-mist">Education</h3>
          <Reveal stagger={0.07} className="mt-6">
            {education.map((e) => (
              <div
                key={e.degree}
                className="grid gap-2 border-t border-line py-6 transition-colors duration-500 hover:bg-bone lg:grid-cols-12 lg:gap-6 lg:px-4"
              >
                <div className="lg:col-span-7">
                  <p className="text-body leading-snug font-medium">{e.degree}</p>
                  <p className="mt-1.5 text-[0.8125rem] text-graphite">{e.school}</p>
                </div>
                <div className="flex items-baseline justify-between gap-4 lg:col-span-5">
                  <span className="label text-slate tabular-nums">{e.note}</span>
                  <span className="label text-mist tabular-nums">{e.period}</span>
                </div>
              </div>
            ))}
            <div className="border-t border-line" />
          </Reveal>

          <h3 className="label mt-16 text-mist">Toolkit</h3>
          <Reveal stagger={0.05} className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2">
            {skillTags.map((g) => (
              <div key={g.group} className="bg-paper p-5">
                <p className="label text-ink">{g.group}</p>
                <ul className="mt-3.5 space-y-1.5">
                  {g.items.map((i) => (
                    <li key={i} className="flex items-baseline gap-2.5 text-[0.8125rem] text-graphite">
                      <span className="mt-[7px] h-px w-2.5 shrink-0 bg-mist" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>

          <h3 className="label mt-16 text-mist">Co-curricular</h3>
          <Reveal stagger={0.07} className="mt-6">
            {activities.map((a) => (
              <div
                key={a.title}
                className="grid gap-2 border-t border-line py-6 transition-colors duration-500 hover:bg-bone lg:grid-cols-12 lg:gap-6 lg:px-4"
              >
                <div className="lg:col-span-7">
                  <p className="text-body font-medium">{a.title}</p>
                  <p className="mt-1.5 text-[0.8125rem] text-graphite">{a.org}</p>
                </div>
                <div className="lg:col-span-5">
                  <span className="label text-slate">{a.role}</span>
                </div>
              </div>
            ))}
            <div className="border-t border-line" />
          </Reveal>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <h3 className="label text-mist">Certifications</h3>
          <Reveal stagger={0.06} className="mt-6 border-t border-line">
            {certifications.map((c) => (
              <div
                key={c.title}
                className="border-b border-line py-5 transition-colors duration-500 hover:bg-bone lg:px-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-body leading-snug font-medium">{c.title}</p>
                  <span className="label shrink-0 pt-0.5 text-mist tabular-nums">{c.date}</span>
                </div>
                <p className="label mt-2.5 text-slate">{c.issuer}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-14" y={20}>
            <p className="label text-mist">Areas of interest</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {interests.map((tag) => (
                <li
                  key={tag}
                  className="label rounded-full border border-line px-3.5 py-2 text-slate transition-colors duration-300 hover:border-ink hover:text-ink"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
