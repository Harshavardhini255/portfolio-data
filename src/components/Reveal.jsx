import { useEffect, useRef } from 'react'
import { reveal, revealGroup } from '../lib/motion'

/**
 * Reveals its own children on scroll.
 * `stagger` turns on group mode; otherwise the element itself animates.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  y = 28,
  stagger = 0,
  delay = 0,
  start = 'top 88%',
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const ctx = root.closest('section') || document.body

    if (stagger) {
      const targets = Array.from(root.children)
      revealGroup(targets, { y, stagger, start })
    } else {
      const targets = root.matches('[data-reveal]') ? [root] : Array.from(root.querySelectorAll('[data-reveal]'))
      if (targets.length > 1) revealGroup(targets, { y, stagger: 0.07, start })
      else reveal(targets[0] ?? root, { y, delay, start })
    }

    return () => {
      root.querySelectorAll('[data-reveal]').forEach((el) => el.style.opacity = '')
      if (ctx._gsap) ctx._gsap.kill?.()
    }
  }, [y, stagger, delay, start])

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
