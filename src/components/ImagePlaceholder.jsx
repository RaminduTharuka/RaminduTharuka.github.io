import { useState } from 'react'

/**
 * Renders a real image if it loads successfully, otherwise falls back to a
 * clean, intentional placeholder instead of a broken-image icon.
 *
 * Usage: <ImagePlaceholder src="/assets/falcon/steering-wheel.jpg" label="Steering wheel — final CAD" />
 */
export default function ImagePlaceholder({ src, label, alt }) {
  const [failed, setFailed] = useState(!src)

  if (!failed) {
    return (
      <img
        src={src}
        alt={alt || label || 'Engineering project image'}
        loading="lazy"
        onError={() => setFailed(true)}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    )
  }

  return (
    <div className="img-placeholder" role="img" aria-label={alt || label || 'Image placeholder'}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5-9 9" />
      </svg>
      <span>{label || 'IMAGE PLACEHOLDER'}</span>
    </div>
  )
}
