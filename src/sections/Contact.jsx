import { ArrowUpRight } from 'lucide-react'
import { contact, meta, socials, status } from '../data/content'
import StatusPill from '../components/StatusPill'
import Reveal from '../components/Reveal'

/**
 * The reference's contact page: a status pill, one very large centred display
 * line, a short centred paragraph, a solid dark pill button, then a centred
 * horizontal social row.
 */
export default function Contact() {
  return (
    <section id="contact" className="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-28">
      <div className="bg-ink py-24 text-paper lg:py-40">
        <div className="shell gutter">
          <Reveal className="flex justify-center">
            <StatusPill label={status.label} href={`mailto:${meta.email}`} invert />
          </Reveal>

          <Reveal className="mt-14 lg:mt-20" y={36}>
            <h2 className="display mx-auto max-w-[20ch] text-center text-[clamp(2rem,4.9vw,4.5rem)] text-white">
              {contact.title}
            </h2>
          </Reveal>

          <Reveal className="mt-10 flex justify-center" y={24}>
            <p className="body-copy max-w-[54ch] text-center text-white/60">{contact.body}</p>
          </Reveal>

          <Reveal className="mt-12 flex flex-wrap justify-center gap-3" y={24}>
            {contact.actions.map((a) => (
              <a
                key={a.label}
                href={a.href}
                {...(a.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                className={`group inline-flex items-center gap-3 rounded-full py-4 pr-6 pl-7 transition-all duration-500 ${
                  a.primary
                    ? 'bg-white text-ink hover:bg-transparent hover:text-white'
                    : 'border border-white/25 text-white/75 hover:border-white hover:text-white'
                }`}
              >
                <span className="label">{a.label}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </Reveal>

          {/* centred social row, as in the reference footer */}
          <Reveal className="mt-20" y={20}>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-white/15 pt-8">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="group flex items-center gap-2.5"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-white/25 text-white/70 transition-colors group-hover:border-white group-hover:bg-white group-hover:text-ink">
                      <span className="label text-[0.5rem] tracking-[0.04em]">
                        {s.label.slice(0, 1)}
                      </span>
                    </span>
                    <span className="label text-white/55 transition-colors group-hover:text-white">
                      {s.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <footer className="border-t border-line">
        <div className="shell gutter">
          <div className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center bg-ink">
                <span className="label text-[0.5rem] tracking-[0.06em] text-paper">{meta.monogram}</span>
              </span>
              <span className="label text-slate">
                {meta.name} — {meta.role}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
              <span className="label text-mist">{meta.location}</span>
              <a href={`mailto:${meta.email}`} className="label text-slate transition-colors hover:text-ink">
                {meta.email}
              </a>
              <a href={`tel:${meta.phoneRaw}`} className="label text-slate transition-colors hover:text-ink">
                {meta.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-line py-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="label text-mist">
              © {new Date().getFullYear()} {meta.name}
            </p>
            <a
              href="#index"
              className="label inline-flex items-center gap-2 text-ink transition-opacity hover:opacity-60"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}
