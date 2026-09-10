import { personal } from '../data/personal'
import { useReveal } from '../hooks/useReveal'

function GlanceItem({ item, index }) {
  const [ref, visible] = useReveal(0.3)
  return (
    <div
      ref={ref}
      className={`glance-item${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <p className="glance-label">{item.label}</p>
      <p className="glance-detail">{item.detail}</p>
    </div>
  )
}

export default function EngineeringSnapshot() {
  return (
    <section className="shell" style={{ paddingTop: '56px', paddingBottom: '56px' }}>
      <div className="glance">
        {personal.glance.map((item, i) => (
          <GlanceItem key={item.label} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
