import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle title="Projects" subtitle="Some recent work" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
