import { personal } from '../data/personal'
import ImagePlaceholder from './ImagePlaceholder'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const [ref, visible] = useReveal(0.15)

  return (
    <section className="section shell" ref={ref}>
      <div className="section-head">
        <div>
          <p className="section-index">About</p>
          <h2 className="section-title">Why I build things</h2>
        </div>
      </div>

      <div className={`about-grid reveal${visible ? ' visible' : ''}`}>
        <div className="about-image">
          <ImagePlaceholder src="/assets/profile/about-image.jpg" label="[ABOUT_IMAGE] — portrait or workshop photo" />
        </div>

        <div className="about-text">
          {personal.aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="about-exploring">
            <p className="about-exploring-label">Currently exploring</p>
            <div className="tag-list">
              {personal.currentlyExploring.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
