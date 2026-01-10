import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <img
              src="/profile.jpg"
              alt="Ayush Bhadouria...."
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </motion.div>

          {/* Content */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-bold text-white"
            >
              Hello, I'm Ayush Singh
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-gray-300 max-w-2xl"
            >
              I design and build responsive, accessible web applications using modern frontend and backend technologies.
            </motion.p>

            <div className="mt-8 flex items-center justify-center md:justify-start gap-4 flex-wrap">
              <a
                href="#projects"
                className="inline-block px-6 py-3 rounded-md bg-primary text-white font-medium hover:opacity-90 transition"
              >
                See Projects
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="inline-block px-6 py-3 rounded-md border border-primary text-primary font-medium hover:bg-primary hover:text-white transition"
              >
                Download Resume
              </a>
              <a href="#contact" className="text-gray-300 hover:underline">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
