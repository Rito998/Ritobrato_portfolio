import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'
import Navbar from './components/Navbar'

type Section = 'hero' | 'projects' | 'about' | 'contact'

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('hero')
  const [direction, setDirection] = useState<1 | -1>(1)

  const handleNavigation = (section: Section) => {
    const sections: Section[] = ['hero', 'projects', 'about', 'contact']
    const currentIndex = sections.indexOf(activeSection)
    const nextIndex = sections.indexOf(section)
    
    setDirection(nextIndex > currentIndex ? 1 : -1)
    setActiveSection(section)
  }

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-black">
      {/* Fixed Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigation} />

      {/* Section Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 100 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="w-full"
        >
          {activeSection === 'hero' && <Hero onNavigate={handleNavigation} />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'about' && <About />}
          {activeSection === 'contact' && <Contact />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
