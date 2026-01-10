import React from 'react'
import { motion } from 'framer-motion'
import type { Skill } from '../data/skills'

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const renderProficiencyDots = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`w-2 h-2 rounded-full ${
          i < level ? 'bg-primary' : 'bg-gray-600'
        }`}
      />
    ))
  }

  return (
    <motion.div
      whileHover={{ 
        scale: 1.03, 
        boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
        y: -4
      }}
      className="section-surface cursor-pointer transition-all duration-200 hover:border-primary/30 border border-transparent"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-medium text-gray-100">{skill.name}</h3>
        <div className="flex gap-1">
          {renderProficiencyDots(skill.proficiency)}
        </div>
      </div>
      <p className="text-sm text-gray-400">{skill.level}</p>
    </motion.div>
  )
}

export default SkillCard
