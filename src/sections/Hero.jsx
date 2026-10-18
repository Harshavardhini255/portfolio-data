import { useEffect, useRef } from 'react'
import { about, headline, meta, stats } from '../data/content'
import { gsap, EASE } from '../lib/motion'

export default function Hero() {
  const root = useRef(null)

  useEffect(() => {
    const q = gsap.utils.selector(root)
    const tl = gsap.timeline({ defaults: { ease: EASE } })

    tl.fromTo(q('[data-h="eyebrow"]'), { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.8 })
      .fromTo(
        q('[data-h="word"]'),
        { yPercent: 116 },
        { yPercent: 0, duration: 1.3, stagger: 0.08 },
        '-=0.45',
      )
      .fromTo(
        q('[data-h="role"] > span'),
        { autoAlpha: 0, y: 26 },
        { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1 },
        '-=0.8',
      )
      .fromTo(q('[data-h="portrait"]'), { autoAlpha: 0, scale: 0.94 }, { autoAlpha: 1, scale: 1, duration: 1.4 }, '-=1')
      .fromTo(q('[data-h="intro"]'), { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 1 }, '-=1')
      .fromTo(q('[data-h="meta"] > div'), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.08 }, '-=0.8')
      .fromTo(q('[data-h="stat"]'), { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.07 }, '-=0.7')

    return () => tl.kill()
  }, [])

  return (
    <section id="index" ref={root} className="shell gutter flex min-h-svh flex-col justify-between pt-32 pb-10 lg:pt-40">
      {/* top line */}
      <div data-h="eyebrow" className="flex items-center justify-between gap-6 border-b border-line pb-5">
        <span className="label text-slate">{meta.location}</span>
        <span className="label text-mist">Portfolio — {new Date().getFullYear()}</span>
      </div>

      {/* display name */}
      <div className="flex flex-1 flex-col justify-center py-14 lg:py-20">
        <h1 className="display text-display">
          <span className="block overflow-hidden pb-[0.04em]">
            <span data-h="word" className="block">
              {headline.name[0]}
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.04em]">
            <span data-h="word" className="block text-mist">
              {headline.name[1]}
            </span>
          </span>
        </h1>

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          {/* portrait, organic mask as in the reference */}
          <div data-h="portrait" className="order-2 lg:order-1 lg:col-span-4">
            <div className="blob relative aspect-[4/5] w-full max-w-[19rem] overflow-hidden bg-bone lg:sticky lg:top-32">
              <div className="grain absolute inset-0 opacity-60" aria-hidden="true" />
              <img
                src={about.portrait.src}
                alt={about.portrait.alt}
                width={560}
                height={908}
                className="relative h-full w-full object-cover grayscale contrast-[1.08]"
              />
            </div>
          </div>

          {/* role + intro */}
          <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-6">
            <p data-h="role" className="flex items-baseline gap-3">
              <span className="label text-mist">{headline.rolePrefix}</span>
              <span className="display text-[clamp(2rem,4.6vw,4.25rem)]">{headline.roleWord}</span>
            </p>

            <p data-h="intro" className="body-copy mt-8 max-w-[46ch] text-lead text-graphite">
              {headline.intro}
            </p>

            <dl data-h="meta" className="mt-10 space-y-0">
              {headline.meta.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 border-t border-line py-3">
                  <dt className="label text-mist">{k}</dt>
                  <dd className="text-right text-body text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* stat strip */}
      <div data-h="stat" className="grid grid-cols-2 gap-px border-t border-line bg-line sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-paper pt-5 pb-6">
            <p className="display text-[clamp(1.75rem,4vw,2.75rem)] tabular-nums">{s.value}</p>
            <p className="label mt-2.5 text-mist">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
