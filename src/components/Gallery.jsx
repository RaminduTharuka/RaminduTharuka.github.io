import { galleryImages } from '../data/gallery'
import ImagePlaceholder from './ImagePlaceholder'

export default function Gallery() {
  return (
    <section className="section shell">
      <div className="section-head">
        <div>
          <p className="section-index">Gallery</p>
          <h2 className="section-title">Engineering in motion</h2>
          <p className="section-sub">Falcon E Racing, Formula Student Spain, workshops and project work.</p>
        </div>
      </div>

      <div className="masonry-grid">
        {galleryImages.map((img, i) => (
          <div className={`masonry-item${img.span ? ` ${img.span}` : ''}`} key={i}>
            <ImagePlaceholder src={img.src} label={img.caption} />
          </div>
        ))}
      </div>
    </section>
  )
}
