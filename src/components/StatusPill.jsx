/**
 * The "Available for New Project" pill from the reference header.
 * Leading glyph + mono label, bordered, inverts on hover.
 */
export default function StatusPill({ label, href = '#contact', invert = false, className = '' }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full border py-2.5 pr-5 pl-4 transition-colors duration-500 ${
        invert
          ? 'border-white/30 text-white hover:bg-white hover:text-ink'
          : 'border-line text-ink hover:border-ink hover:bg-ink hover:text-paper'
      } ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-70 ${
            invert ? 'bg-white' : 'bg-ink'
          }`}
        />
        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${invert ? 'bg-white' : 'bg-ink'}`} />
      </span>
      <span className="label">{label}</span>
    </a>
  )
}
