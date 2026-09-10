import { personal } from '../data/personal'

export default function Contact() {
  return (
    <section id="contact" className="section shell contact-section">
      <h2 className="contact-title">Let's build something</h2>
      <p className="contact-sub">
        Open to industrial training and internship opportunities in mechanical design,
        manufacturing and automotive engineering. Reach out — I'd like to hear about it.
      </p>

      <div className="contact-links">
        <a className="contact-link" href={`mailto:${personal.links.email}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
          </svg>
          Email
        </a>
        <a className="contact-link" href={personal.links.linkedin} target="_blank" rel="noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="8" y1="11" x2="8" y2="16" /><line x1="8" y1="8" x2="8" y2="8" /><path d="M12 16v-3a2 2 0 0 1 4 0v3" />
          </svg>
          LinkedIn
        </a>
        <a className="contact-link" href={personal.links.github} target="_blank" rel="noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
          </svg>
          GitHub
        </a>
        <span className="contact-link" style={{ cursor: 'default' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          {personal.location}
        </span>
      </div>
    </section>
  )
}
