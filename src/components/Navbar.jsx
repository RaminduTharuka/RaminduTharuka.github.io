import { useEffect, useState } from 'react'
import { personal } from '../data/personal'

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'falcon', label: 'Falcon E' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className="navbar">
      <div className="shell navbar-inner">
        <button className="navbar-mark" onClick={() => scrollTo('top')}>
          RD<span>.</span>
        </button>

        <nav className="navbar-links">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

        <a href={personal.links.cv} className="navbar-cta" download>
          Download CV
        </a>

        <button
          className="navbar-toggle icon-link"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
          <div className="shell" style={{ padding: '20px var(--gutter) 28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {LINKS.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} style={{ fontSize: '1.05rem', textAlign: 'left' }}>
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
