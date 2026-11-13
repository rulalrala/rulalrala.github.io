import type { Project } from '../profile.ts'
import Section from './Section.tsx'

type ProjectsProps = {
  projects: Project[]
}

function Projects({ projects }: ProjectsProps) {
  return (
    <Section id="projects" title="프로젝트">
      <ul className="projects">
        {projects.map((project) => (
          <li className="project" key={project.name}>
            <h3 className="project__name">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="project__description">{project.description}</p>
            <ul className="tags tags--small">
              {project.tech.map((tech) => (
                <li className="tag" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Projects
