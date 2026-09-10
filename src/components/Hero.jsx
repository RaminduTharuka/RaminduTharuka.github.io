import { personal } from '../data/personal'
import ImagePlaceholder from './ImagePlaceholder'

export default function Hero() {
  const scrollToWork = () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="top" className="hero blueprint-grid">
      <div className="shell hero-grid">
        <div>
          <p className="hero-eyebrow">Mechanical Engineering Portfolio</p>
          <h1 className="hero-name">{personal.name}</h1>
          <p className="hero-role">{personal.role}</p>
          <p className="hero-statement">{personal.heroStatement}</p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={scrollToWork}>
              Explore My Work
            </button>
            <a className="btn btn-secondary" href={personal.links.cv} download>
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a className="icon-link" href={personal.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="8" y1="11" x2="8" y2="16" />
                <line x1="8" y1="8" x2="8" y2="8" />
                <path d="M12 16v-3a2 2 0 0 1 4 0v3" />
              </svg>
            </a>
            <a className="icon-link" href={personal.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-frame" />
          <ImagePlaceholder
            src="/assets/profile/hero-engineering-image.jpg"
            label="[HERO_ENGINEERING_IMAGE] — Falcon E2 / steering CAD / workshop photo"
          />
          <span className="hero-visual-tag">Falcon E2 — Steering Subsystem</span>
        </div>
      </div>
    </section>
  )
}
