import { personal } from '../data/personal'
import ImagePlaceholder from './ImagePlaceholder'

export default function Education() {
  return (
    <section className="section shell" style={{ paddingTop: '0' }}>
      <div className="section-head">
        <div>
          <p className="section-index">Education</p>
          <h2 className="section-title">{personal.university}</h2>
        </div>
      </div>

      <div className="education-row">
        <div className="education-logo">
          <ImagePlaceholder src="/assets/profile/uom-logo.jpg" label="[UOM_IMAGE]" />
        </div>
        <div>
          <p className="education-degree">B.Sc. Engineering (Honours) — Mechanical Engineering</p>
          <p className="education-school">{personal.university}</p>
          <div className="education-meta">
            <span>{personal.degreeStart} – {personal.degreeStatus}</span>
            <span>CGPA: {personal.cgpa}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
