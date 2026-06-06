// src/App.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { useTheme } from './hooks/useTheme'
import { useScrollProgress } from './hooks/useScrollProgress'

import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Statistics from './components/Statistics'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Back to top button
const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-2xl flex items-center justify-center font-display text-lg font-bold text-white shadow-lg"
          style={{
            background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
            boxShadow: '0 4px 30px rgba(14,165,233,0.35)',
          }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}

const App = () => {
  const { isDark, toggle } = useTheme()
  const progress = useScrollProgress()
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {/* Loading screen */}
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      {/* Main app */}
      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar isDark={isDark} toggleTheme={toggle} />

            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Statistics />
              <Certificates />
              <Contact />
            </main>

            <Footer />

            {/* Back to top */}
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
