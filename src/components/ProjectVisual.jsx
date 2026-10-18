/**
 * Deterministic monochrome "screenshot" placeholder.
 * Renders an abstract data-visual from a seed so every project card has a
 * distinct, on-brand graphic without needing real screenshots.
 */
export default function ProjectVisual({ seed = 0, title = '' }) {
  const bars = Array.from({ length: 11 }, (_, i) => {
    const a = Math.sin((seed + 1) * (i + 2) * 1.7) * 0.5 + 0.5
    const b = Math.cos((seed + 1) * (i + 5) * 0.9) * 0.5 + 0.5
    return 22 + Math.round((a * 0.65 + b * 0.35) * 74)
  })

  const gridY = [18, 42, 66]
  const dots = Array.from({ length: 24 }, (_, i) => ({
    cx: 8 + (i % 8) * 12,
    cy: 8 + Math.floor(i / 8) * 12,
    r: 0.8 + (((i * 7 + seed * 3) % 5) / 5) * 1.6,
  }))

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink" aria-hidden="true">
      <div className="grain absolute inset-0 opacity-25" />

      {/* faint dot matrix */}
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-25">
        {dots.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="#fff" />
        ))}
      </svg>

      {/* bar series */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[62%] w-full"
      >
        {bars.map((h, i) => (
          <rect
            key={i}
            x={i * 9.1 + 1}
            y={100 - h}
            width={5.4}
            height={h}
            fill="#fff"
            opacity={0.14 + (i / bars.length) * 0.62}
          />
        ))}
      </svg>

      {/* grid rules */}
      <div className="absolute inset-0 flex flex-col justify-between py-[12%]">
        {gridY.map((p) => (
          <span key={p} className="block h-px w-full bg-white/10" />
        ))}
      </div>

      {/* outlined block + label, mimics a dashboard KPI card */}
      <div className="absolute top-[14%] left-[7%] w-[38%] border border-white/25 p-[6%]">
        <span className="block h-px w-[38%] bg-white/60" />
        <span className="mt-[18%] block h-[26%] w-[64%] bg-white/85" />
        <span className="mt-[12%] block h-px w-full bg-white/20" />
      </div>

      <span className="label absolute right-[6%] bottom-[6%] text-white/40">
        {title.slice(0, 2).toUpperCase()}
      </span>
    </div>
  )
}
