import { certifications } from '../data/certifications'
import ImagePlaceholder from './ImagePlaceholder'

export default function Certifications() {
  return (
    <section className="section shell" style={{ paddingTop: '0' }}>
      <div className="section-head">
        <div>
          <p className="section-index">Certifications</p>
          <h2 className="section-title">Continuing to learn</h2>
        </div>
      </div>

      <div className="cert-grid">
        {certifications.map((c) => (
          <div className="cert-card" key={c.name}>
            <div className="cert-media">
              <ImagePlaceholder src={c.image} label={`[CERTIFICATE_IMAGE] — ${c.name}`} />
            </div>
            <div className="cert-body">
              <p className="cert-name">{c.name}</p>
              <p className="cert-meta">{c.issuer} · {c.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
