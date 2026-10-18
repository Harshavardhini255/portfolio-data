/**
 * The reference labels every section with a slash-prefixed uppercase title,
 * e.g. "/SELECTED WORK", "/SERVICE", "/EXPERIENCE". Reproduced here.
 */
export default function SlashTitle({ children, invert = false, action = null, className = '' }) {
  return (
    <header className={`flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4 ${className}`}>
      <h2
        className={`display flex items-baseline text-section ${
          invert ? 'text-white' : 'text-ink'
        }`}
      >
        <span className="text-mist" aria-hidden="true">
          /
        </span>
        <span>{children}</span>
      </h2>
      {action}
    </header>
  )
}
