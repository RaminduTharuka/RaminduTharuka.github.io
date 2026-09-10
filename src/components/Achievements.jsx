import { achievements } from '../data/achievements'
import ImagePlaceholder from './ImagePlaceholder'

export default function Achievements() {
  return (
    <section className="section shell">
      <div className="section-head">
        <div>
          <p className="section-index">Beyond the Workshop</p>
          <h2 className="section-title">Leadership & teamwork</h2>
          <p className="section-sub">
            Engineering is a team sport — captaining, leading and competing has shaped how I work with people as much as machines.
          </p>
        </div>
      </div>

      <div className="achievements-grid">
        {achievements.map((a) => (
          <div className="achievement-card" key={a.title}>
            <div className="achievement-media">
              <ImagePlaceholder src={a.image} label={a.title} />
            </div>
            <div className="achievement-body">
              <p className="achievement-title">{a.title}</p>
              <p className="achievement-org">{a.org} · {a.period}</p>
              <p className="achievement-desc">{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
