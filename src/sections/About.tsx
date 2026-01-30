import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle title="About Me" subtitle="A brief introduction" />
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-surface"
        >
          <div className="border-l-4 border-primary pl-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              Hi! I'm a passionate Full Stack developer who enjoys building user-friendly, responsive, and accessible websites.
              I specialize in creating clean and maintainable front-end interfaces using HTML, CSS, JavaScript, and modern frameworks like React.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              My journey into web development began with a curiosity about how websites work, which gradually grew into a career I truly enjoy. 
              I have hands-on experience with both front-end and back-end development and enjoy collaborating with designers, developers, and clients to bring ideas to life.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
