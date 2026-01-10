import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { skills } from '../data/skills'
import SkillCard from '../components/SkillCard'

const Skills: React.FC = () => {
  const skillCategories = ['Frontend', 'Backend', 'Database', 'Tools'] as const
  
  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category)
  }

  return (
    <section id="skills" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle title="Skills" subtitle="Technologies and tools I use" />
        
        {skillCategories.map(category => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 border-l-4 border-primary pl-4">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {getSkillsByCategory(category).map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
