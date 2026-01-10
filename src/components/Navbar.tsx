import React from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-30 bg-transparent"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        <a href="#home" className="text-xl font-bold text-primary">
          Ayush Singh
        </a>

        <ul className="hidden md:flex gap-6 items-center text-gray-300">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="hover:text-white transition">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          {/* Mobile: simple menu anchor links */}
          <details className="text-gray-300">
            <summary className="cursor-pointer">Menu</summary>
            <ul className="mt-2 flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="block px-2 py-1 rounded hover:bg-surface">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
