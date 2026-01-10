import React from 'react'
import SectionTitle from '../components/SectionTitle'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <SectionTitle title="Contact" subtitle="Let's work together" />
        <div className="section-surface text-center">
          <p className="text-gray-300 text-lg mb-6">
            I'm open to opportunities, collaborations, and freelance projects.<br />
            Feel free to reach out via email or connect with me on GitHub or LinkedIn.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:ayushbhadouria618@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              <span>📧</span>
              ayushbhadouria618@gmail.com
            </a>
            
            <a
              href="https://github.com/ayushbhadouria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-md hover:border-gray-500 transition-colors"
            >
              <span>🐈</span>
              GitHub
            </a>
            
            <a
              href="https://www.linkedin.com/in/ayush-singh-a39489260"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-md hover:border-gray-500 transition-colors"
            >
              <span>🔗</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
