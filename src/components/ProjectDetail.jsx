import { useEffect } from 'react'
import ImagePlaceholder from './ImagePlaceholder'

export default function ProjectDetail({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const td = project.technicalDetails

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose} aria-label="Close case study">✕</button>

        <div className="project-modal-hero">
          <ImagePlaceholder src={project.heroImage} label={`[${project.id.toUpperCase()}_HERO]`} />
        </div>

        <div className="project-modal-body">
          <p className="project-modal-eyebrow">{project.category} · {project.year}</p>
          <h2 className="project-modal-title">{project.name}</h2>
          <p className="project-modal-desc">{project.shortDescription}</p>

          <div className="pm-block">
            <p className="pm-block-label">Overview</p>
            <p className="pm-block-text">{project.overview}</p>
          </div>

          <div className="pm-block">
            <p className="pm-block-label">My Role</p>
            <p className="pm-block-text">{project.myRole}</p>
          </div>

          <div className="pm-block">
            <p className="pm-block-label">Engineering Challenge</p>
            <p className="pm-block-text">{project.challenge}</p>
          </div>

          <div className="pm-block">
            <p className="pm-block-label">Approach</p>
            <div className="pm-approach">
              {project.approach.map((step, i) => (
                <span key={step}>{i > 0 ? '→ ' : ''}{step}</span>
              ))}
            </div>
          </div>

          <div className="pm-block">
            <p className="pm-block-label">Tools</p>
            <div className="pm-tools">
              {project.tools.map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>

          <div className="pm-block">
            <p className="pm-block-label">Technical Details</p>
            <div className="pm-tech-grid">
              <div className="pm-tech-item">
                <p className="pm-tech-item-label">Calculations</p>
                <p className="pm-tech-item-value">{td.calculations}</p>
              </div>
              <div className="pm-tech-item">
                <p className="pm-tech-item-label">Materials</p>
                <p className="pm-tech-item-value">{td.materials}</p>
              </div>
              <div className="pm-tech-item">
                <p className="pm-tech-item-label">Design Constraints</p>
                <p className="pm-tech-item-value">{td.constraints}</p>
              </div>
              <div className="pm-tech-item">
                <p className="pm-tech-item-label">Simulation Results</p>
                <p className="pm-tech-item-value">{td.simulationResults}</p>
              </div>
              <div className="pm-tech-item" style={{ gridColumn: '1 / -1' }}>
                <p className="pm-tech-item-label">Performance Results</p>
                <p className="pm-tech-item-value">{td.performanceResults}</p>
              </div>
            </div>
          </div>

          <div className="pm-block">
            <p className="pm-block-label">Gallery</p>
            <div className="pm-gallery">
              {project.gallery.map((src) => (
                <div key={src}>
                  <ImagePlaceholder src={src} label={src.split('/').pop()} />
                </div>
              ))}
            </div>
          </div>

          <div className="pm-block" style={{ marginBottom: 0 }}>
            <p className="pm-block-label">Lessons Learned</p>
            <p className="pm-block-text">{project.lessonsLearned}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
