import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const EASE = 'expo.out'

/** Fades + lifts a single element into view. */
export function reveal(el, { y = 28, delay = 0, duration = 1.1, start = 'top 88%' } = {}) {
  return gsap.fromTo(
    el,
    { autoAlpha: 0, y },
    {
      autoAlpha: 1,
      y: 0,
      duration,
      delay,
      ease: EASE,
      scrollTrigger: { trigger: el, start, once: true },
    },
  )
}

/** Reveals a group of children with a stagger. */
export function revealGroup(els, { y = 30, stagger = 0.07, start = 'top 86%' } = {}) {
  if (!els.length) return
  return gsap.fromTo(
    els,
    { autoAlpha: 0, y },
    {
      autoAlpha: 1,
      y: 0,
      duration: 1.05,
      stagger,
      ease: EASE,
      scrollTrigger: { trigger: els[0], start, once: true },
    },
  )
}

export { gsap, ScrollTrigger }
