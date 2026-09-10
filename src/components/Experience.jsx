import { falconExperience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section shell">
      <div className="section-head">
        <div>
          <p className="section-index">Experience</p>
          <h2 className="section-title">{falconExperience.org}</h2>
          <p className="section-sub">{falconExperience.affiliation}</p>
        </div>
      </div>

      <div className="timeline-journey">
        {falconExperience.journey.map((stage, i) => (
          <span key={stage} style={{ display: 'flex', alignItems: 'center' }}>
            <span className={`timeline-node${i === falconExperience.journey.length - 1 ? ' current' : ''}`}>
              {stage}
            </span>
            {i < falconExperience.journey.length - 1 && <span className="timeline-arrow">→</span>}
          </span>
        ))}
      </div>

      <div className="timeline-roles">
        {falconExperience.roles.map((role) => (
          <div className="timeline-role" key={role.title}>
            <p className="timeline-role-period">{role.period}</p>
            <p className="timeline-role-title">{role.title}</p>
            <p className="timeline-role-desc">{role.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
