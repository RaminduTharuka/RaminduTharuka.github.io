import { personal } from '../data/personal'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div>
          <p className="footer-mark">{personal.name}</p>
          <p className="footer-meta">{personal.role} · {personal.university}</p>
        </div>
        <div className="footer-links">
          <a href={personal.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={personal.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${personal.links.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
