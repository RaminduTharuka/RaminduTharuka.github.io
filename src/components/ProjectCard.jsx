import ImagePlaceholder from './ImagePlaceholder'

export default function ProjectCard({ project, onOpen }) {
  return (
    <button
      className={`project-card size-${project.size}`}
      onClick={() => onOpen(project)}
    >
      <div className="project-card-media">
        <ImagePlaceholder src={project.heroImage} label={`[${project.id.toUpperCase()}_HERO]`} />
      </div>
      <div className="project-card-body">
        <div className="project-card-meta">
          <span className="num">{project.number}</span>
          <span>{project.category}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>
        <h3 className="project-card-name">{project.name}</h3>
        <p className="project-card-desc">{project.shortDescription}</p>
        <div className="project-card-tools">
          {project.tools.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <span className="project-card-cta">View Case Study →</span>
      </div>
    </button>
  )
}
