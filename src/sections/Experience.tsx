import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Developer',
      company: 'Garzitti Interactive',
      location: 'Panchkula',
      period: 'June 2025 – Present',
      icon: '💼',
      points: [
        'Developed, maintained, and tested responsive web applications using HTML, CSS, JavaScript, and React',
        'Integrated RESTful APIs using Python (Flask) and MongoDB to enhance data exchange',
        'Implemented AI-driven features for intelligent data processing and predictive insights'
      ]
    },
    {
      type: 'work',
      title: 'Web Developer',
      company: 'WorkdWell',
      location: 'Mohali',
      period: 'July 2024 – January 2025',
      icon: '💼',
      points: [
        'Engineered mobile-friendly web pages using HTML, CSS, and JavaScript',
        'Converted design mockups into interactive and responsive web interfaces',
        'Designed and managed databases using MySQL',
        'Developed and implemented full-stack web applications'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Technology (B.Tech) – Information Technology',
      company: 'Shree Ram Murti Smarak College of Engineering and Technology, Bareilly',
      location: '',
      period: '2020 – 2024',
      icon: '🎓',
      points: [
        'Strong foundation in computer science fundamentals',
        'Coursework included Web Technologies, Databases, and Software Development',
        'Focused on building modern full-stack web applications'
      ]
    }
  ]

  return (
    <section id="experience" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle title="Experience & Education" subtitle="My professional journey and background" />
        
        {/* Career Objective */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-surface mb-8 text-center"
        >
          <h3 className="text-lg font-semibold text-primary mb-2">🎯 Career Objective</h3>
          <p className="text-gray-300">
            Aspiring full-stack web developer aiming to build scalable, high-quality web applications and contribute to impactful real-world products.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative mb-8 ml-16"
            >
              {/* Timeline dot */}
              <div className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              
              <div className="section-surface hover:border-primary/30 border border-transparent transition-all duration-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <span>{exp.icon}</span>
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-primary font-medium">{exp.company}</h4>
                    {exp.location && (
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    )}
                  </div>
                  <span className="text-gray-400 text-sm font-medium bg-gray-800 px-3 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {exp.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-gray-300 flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-surface mt-8"
        >
          <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
            <span className="text-primary mr-2">📚</span>
            Currently Learning
          </h3>
          <ul className="space-y-2">
            <li className="text-gray-300 flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              Advanced React patterns and performance optimization
            </li>
            <li className="text-gray-300 flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              Backend API optimization and scalable architecture
            </li>
            <li className="text-gray-300 flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              System design fundamentals for modern web applications
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience