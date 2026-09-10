import { formulaStudentSpain } from '../data/experience'
import ImagePlaceholder from './ImagePlaceholder'

const GALLERY = [1, 2, 3, 4, 5]

export default function FormulaStudent() {
  return (
    <section className="section shell">
      <div className="section-head">
        <div>
          <p className="section-index">International Competition</p>
          <h2 className="section-title">{formulaStudentSpain.title}</h2>
          <p className="section-sub">{formulaStudentSpain.location}</p>
        </div>
      </div>

      <div className="fs-hero">
        <ImagePlaceholder
          src="/assets/formula-student/formula-student-spain-hero.jpg"
          label="[FORMULA_STUDENT_SPAIN_HERO] — Circuit de Barcelona-Catalunya"
        />
      </div>

      <div className="fs-meta">
        <span><strong>Location — </strong>{formulaStudentSpain.location}</span>
        <span><strong>Dates — </strong>{formulaStudentSpain.date}</span>
      </div>

      <p className="fs-text">{formulaStudentSpain.description}</p>
      <p className="fs-text">{formulaStudentSpain.extendedDescription}</p>

      <div className="fs-stats">
        {formulaStudentSpain.stats.map((s) => (
          <div key={s.label}>
            <p className="fs-stat-value">{s.value}</p>
            <p className="fs-stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="fs-gallery">
        {GALLERY.map((n) => (
          <div key={n}>
            <ImagePlaceholder
              src={`/assets/formula-student/spain-image-0${n}.jpg`}
              label={`[SPAIN_IMAGE_0${n}]`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
