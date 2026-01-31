import React from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const handleOpenGallery = () => {
    if (project.images && project.images.length > 0) {
      const imageUrls = project.images.join('|')
      const galleryUrl = `${window.location.origin}/gallery.html?images=${encodeURIComponent(imageUrls)}&title=${encodeURIComponent(project.title)}`
      window.open(galleryUrl, '_blank')
    }
  }

  return (
    <motion.article
      whileHover={{ 
        translateY: -6,
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
      }}
      className="section-surface min-h-[300px] flex flex-col"
    >
      <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
      <p className="text-gray-400 mt-2 line-clamp-3">{project.description}</p>
      
      {/* Bullet Points */}
      <ul className="mt-3 space-y-1 flex-grow">
        {project.bulletPoints.map((point, index) => (
          <li key={index} className="text-sm text-gray-300 flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            {point}
          </li>
        ))}
      </ul>
      
      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded border border-gray-600 text-gray-300 bg-gray-800/50">
            {t}
          </span>
        ))}
      </div>
      
      {/* Buttons */}
      <div className="mt-4 flex gap-3 flex-wrap">
        {project.hasLiveDemo && project.link && (
          <a 
            href={project.link} 
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            View Live
          </a>
        )}
        {project.repo && (
          <a 
            href={project.repo} 
            className="px-4 py-2 border border-gray-600 text-gray-300 rounded-md hover:border-gray-500 transition-colors text-sm"
          >
            Code
          </a>
        )}
        {project.images && project.images.length > 0 && (
          <button
            onClick={handleOpenGallery}
            className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors text-sm font-medium cursor-pointer"
          >
            📸 Images
          </button>
        )}
      </div>
    </motion.article>
  )
}

export default ProjectCard
