import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="work" className="section shell">
      <div className="section-head">
        <div>
          <p className="section-index">Projects</p>
          <h2 className="section-title">Engineering case studies</h2>
          <p className="section-sub">
            Real problems, worked through from concept to a physical, tested outcome.
          </p>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
        ))}
      </div>

      {activeProject && (
        <ProjectDetail project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  )
}
