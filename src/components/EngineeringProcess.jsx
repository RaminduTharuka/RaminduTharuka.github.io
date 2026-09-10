const STEPS = [
  { num: '01', title: 'Understand' },
  { num: '02', title: 'Concept' },
  { num: '03', title: 'Design' },
  { num: '04', title: 'Analyze' },
  { num: '05', title: 'Build' },
  { num: '06', title: 'Test' },
  { num: '07', title: 'Improve' },
]

export default function EngineeringProcess() {
  return (
    <section className="section shell">
      <div className="section-head">
        <div>
          <p className="section-index">Process</p>
          <h2 className="section-title">How I approach engineering problems</h2>
        </div>
      </div>

      <div className="process-list">
        {STEPS.map((step) => (
          <div className="process-item" key={step.num}>
            <p className="process-item-num">{step.num}</p>
            <p className="process-item-title">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
