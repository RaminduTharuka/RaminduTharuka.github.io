import ImagePlaceholder from './ImagePlaceholder'
import { useReveal } from '../hooks/useReveal'

const PROCESS = ['Problem', 'Concept', 'CAD', 'Analysis', 'Manufacturing', 'Testing', 'Final Design']

const PROCESS_IMAGES = [
  { src: '/assets/falcon/steering-sketch.jpg', label: '[SKETCH_IMAGE]' },
  { src: '/assets/falcon/steering-cad-model.jpg', label: '[CAD_MODEL_IMAGE]' },
  { src: '/assets/falcon/steering-fea.jpg', label: '[FEA_IMAGE]' },
  { src: '/assets/falcon/steering-manufacturing.jpg', label: '[MANUFACTURING_IMAGE]' },
  { src: '/assets/falcon/steering-final.jpg', label: '[FINAL_PRODUCT_IMAGE]' },
]

export default function FeaturedProject() {
  const [ref, visible] = useReveal(0.1)

  return (
    <section id="falcon" className="featured">
      <div className="section shell" ref={ref}>
        <div className="featured-head">
          <div>
            <h2 className="featured-title">Falcon E Racing</h2>
            <p className="featured-subtitle">Engineering a Formula Student EV — Steering Subsystem</p>
          </div>
        </div>

        <p className="featured-lede">
          I joined Falcon E Racing's steering subsystem as a volunteer, then took ownership of a real
          design problem: the Falcon E2's steering wheel had ergonomic limitations that needed solving.
          I carried the redesign from first sketches through 3D CAD modelling, structural analysis in
          ANSYS, and MATLAB-driven engineering calculations — weighing ergonomics, structural strength,
          manufacturability and steering performance against each other at every step, before manufacturing
          the final part.
        </p>

        <div className={`featured-media reveal${visible ? ' visible' : ''}`}>
          <div className="featured-media-main">
            <ImagePlaceholder src="/assets/falcon/falcon-e2.jpg" label="[FALCON_CAR_IMAGE] — Falcon E2" />
          </div>
          <div className="featured-media-side">
            <div>
              <ImagePlaceholder src="/assets/falcon/steering-wheel.jpg" label="[STEERING_WHEEL_IMAGE]" />
            </div>
            <div>
              <ImagePlaceholder src="/assets/falcon/steering-wheel-cad.jpg" label="[STEERING_CAD_IMAGE]" />
            </div>
          </div>
        </div>

        <div className="process-strip">
          {PROCESS.map((step, i) => (
            <span key={step} style={{ display: 'flex', alignItems: 'center' }}>
              <span className="process-step">{step}</span>
              {i < PROCESS.length - 1 && <span className="process-arrow">→</span>}
            </span>
          ))}
        </div>

        <div className="process-gallery">
          {PROCESS_IMAGES.map((img) => (
            <div key={img.label}>
              <div style={{ aspectRatio: '3/4', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                <ImagePlaceholder src={img.src} label={img.label} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '28px', aspectRatio: '21/6', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <ImagePlaceholder
            src="/assets/falcon/steering-manufacturing-wide.jpg"
            label="[STEERING_MANUFACTURING_IMAGE] — machining / assembly in progress"
          />
        </div>
      </div>
    </section>
  )
}
