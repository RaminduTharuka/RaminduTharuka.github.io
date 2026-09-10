import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section id="toolkit" className="section shell">
      <div className="section-head">
        <div>
          <p className="section-index">Toolkit</p>
          <h2 className="section-title">Engineering toolkit</h2>
        </div>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.category} className={`skill-cat${cat.featured ? ' featured' : ''}`}>
            <p className="skill-cat-title">{cat.category}</p>
            <div className="skill-chip-list">
              {cat.items.map((item) => (
                <span key={item} className="skill-chip">{item}</span>
              ))}
            </div>
            {cat.note && <p className="skill-cat-note">{cat.note}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
