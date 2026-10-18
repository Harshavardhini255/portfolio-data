import { useEffect } from 'react'
import Lenis from 'lenis'
import Header from './components/Header'
import SocialRail from './components/SocialRail'
import Hero from './sections/Hero'
import Work from './sections/Work'
import Stack from './sections/Stack'
import Experience from './sections/Experience'
import Credentials from './sections/Credentials'
import Contact from './sections/Contact'
import { about } from './data/content'
import Reveal from './components/Reveal'

/** Editorial intro sits between hero and work, mirroring the reference's
 *  sparse white pause between the hero and /SELECTED WORK. */
function Intro() {
  return (
    <section className="shell gutter py-20 lg:py-28">
      <Reveal stagger={0.1} className="grid gap-8 border-t border-line pt-10 lg:grid-cols-12">
        <h2 className="display text-[clamp(1.5rem,3.4vw,3rem)] lg:col-span-5">
          Profile
        </h2>
        <div className="space-y-6 lg:col-span-6 lg:col-start-7">
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'text-lead leading-[1.6] text-ink' : 'body-copy text-graphite'}>
              {p}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ duration: 1.1, wheelMultiplier: 1, touchMultiplier: 1.6 })

    let id
    const raf = (time) => {
      lenis.raf(time)
      id = requestAnimationFrame(raf)
    }
    id = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Header />
      <SocialRail />

      <main>
        <Hero />
        <Intro />
        <Work />
        <Stack />
        <Experience />
        <Credentials />
        <Contact />
      </main>
    </>
  )
}
