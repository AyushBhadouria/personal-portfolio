import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-surface py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2025 Ayush Bhadouria. Built with React + Vite + Tailwind.
          </p>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/ayushbhadouria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/ayush-singh-a39489260" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:ayushbhadouria618@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
