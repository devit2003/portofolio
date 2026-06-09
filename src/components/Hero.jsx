// src/components/Hero.jsx
import { useCallback, useEffect, useState, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { loadSlim } from '@tsparticles/slim'
const Particles = lazy(() => import('@tsparticles/react'))
import {
  FiGithub, FiMail, FiLinkedin,FiYoutube, FiDownload, FiArrowRight, FiPhone
} from 'react-icons/fi'
import {
  SiPytorch, SiTensorflow, SiPython, SiFlask, SiOpenai,
} from 'react-icons/si'
import { FaBrain } from 'react-icons/fa'

const floatingIcons = [
  { Icon: SiPython,     color: '#3776ab', x: '8%',  y: '20%', delay: 0,   size: 28 },
  { Icon: SiTensorflow, color: '#ff6f00', x: '88%', y: '15%', delay: 1.2, size: 24 },
  { Icon: FaBrain,      color: '#a78bfa', x: '6%',  y: '65%', delay: 0.6, size: 26 },
  { Icon: SiFlask,      color: '#00f5d4', x: '90%', y: '60%', delay: 1.8, size: 24 },
  { Icon: SiPytorch,    color: '#ee4c2c', x: '15%', y: '80%', delay: 0.9, size: 22 },
  { Icon: SiOpenai,     color: '#00a67e', x: '82%', y: '80%', delay: 1.5, size: 22 },
]

const socialLinks = [
  { Icon: FiGithub, href: 'https://github.com/devit2003',              label: 'GitHub' },
  { Icon: FiMail,   href: 'mailto:devrafaezya23@gmail.com',    label: 'Email' },
  { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/devit-saputra-546a452a6',    label: 'LinkedIn' },
  { Icon: FiPhone,  href: 'tel:+6282290234298',                        label: 'Phone' },
  { Icon: FiYoutube,  href: 'https://www.youtube.com/@Devrafaezya',       label: 'YouTube' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const Hero = () => {
  const [showParticles, setShowParticles] = useState(false)
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px) and (pointer: fine)')
    const update = () => setShowParticles(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particles */}
      {showParticles && (
        <Suspense fallback={null}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: { color: { value: 'transparent' } },
              fpsLimit: 30,
              particles: {
                number: { value: 20, density: { enable: true, width: 1920 } },
                color: { value: ['#38bdf8', '#a78bfa', '#00f5d4'] },
                shape: { type: 'circle' },
                opacity: { value: 0.25, random: true },
                size: { value: { min: 1, max: 2 } },
                links: {
                  enable: true,
                  distance: 120,
                  color: '#38bdf8',
                  opacity: 0.1,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 0.5,
                  direction: 'none',
                  outModes: { default: 'out' },
                },
              },
              interactivity: {
                events: {
                  onHover: { enable: true, mode: 'grab' },
                  onClick: { enable: false },
                },
                modes: {
                  grab: { distance: 140, links: { opacity: 0.25 } },
                },
              },
              detectRetina: true,
            }}
          />
        </Suspense>
      )}

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.07]"
          style={{ background: 'var(--gradient-start)' }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.07]"
          style={{ background: 'var(--gradient-end)' }} />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, color, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute z-10 hidden lg:flex items-center justify-center w-12 h-12 rounded-xl"
          style={{ left: x, top: y, background: `${color}15`, border: `1px solid ${color}25`, color }}
          animate={{ y: [0, -12, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 5 + delay, repeat: Infinity, delay, ease: 'easeInOut' }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 pt-24">
        {/* Left */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6">
            <span className="tag">
              <span className="inline-block w-2 h-2 rounded-full mr-2 bg-green-400 animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="glow-text">Devit</span>
            <br />
            <span className="glow-text">Saputra</span>
          </motion.h1>

          <motion.div variants={fadeUp}
            className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 h-10"
            style={{ color: 'var(--text-secondary)' }}>
            <TypeAnimation
              sequence={[
                'Machine Learning Engineer', 2000,
                'AI Engineer', 2000,
                'Computer Vision Developer', 2000,
                'NLP Enthusiast', 2000,
              ]}
              wrapper="span"
              cursor
              repeat={Infinity}
              style={{ color: 'var(--neon)' }}
            />
          </motion.div>

          <motion.p variants={fadeUp}
            className="font-body text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Mahasiswa tingkat akhir Teknik Informatika di ITENAS Bandung, berfokus pada{' '}
            <span style={{ color: 'var(--neon)' }}>Computer Vision</span>,{' '}
            <span style={{ color: 'var(--gradient-end)' }}>Machine Learning</span>, dan{' '}
            <span style={{ color: 'var(--gradient-start)' }}>Agentic AI</span> — mengubah
            ide menjadi solusi nyata berbasis kecerdasan buatan.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
            <a
              href="/cv/Devit saputra CV- ML.pdf"
            download
            className="btn-primary"
            >
            <FiDownload size={16} />
            <span>Download CV</span>
            </a>
            <a href="#projects"
              onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-outline">
              View Projects <FiArrowRight size={16} />
            </a>
            <a href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-outline">
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-3 justify-center lg:justify-start">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--neon)'; e.currentTarget.style.color = 'var(--neon)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Profile image */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 rounded-full blur-3xl opacity-30 scale-110 animate-pulse-slow"
            style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))' }} />

          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden"
            style={{ border: '2px solid var(--border)', boxShadow: '0 0 60px rgba(14, 165, 233, 0.2)' }}>
            <img
              src="/images/profil.jpeg"
              alt="Devit Saputra"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 opacity-20"
              style={{ background: 'linear-gradient(135deg, var(--gradient-start), transparent)' }} />
          </div>

          <motion.div
            className="absolute -bottom-4 -left-8 lg:-left-16 card-glass px-4 py-2 flex items-center gap-2"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xl">🤖</span>
            <div>
              <div className="font-display text-xs font-bold" style={{ color: 'var(--text-primary)' }}>AI Engineer</div>
              <div className="font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>6+ Projects</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -top-4 -right-4 lg:-right-12 card-glass px-4 py-2 flex items-center gap-2"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <span className="text-xl">🎓</span>
            <div>
              <div className="font-display text-xs font-bold" style={{ color: 'var(--text-primary)' }}>ITENAS</div>
              <div className="font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>Informatika</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>scroll down</span>
        <motion.div
          className="w-5 h-9 rounded-full border-2 flex justify-center pt-1.5"
          style={{ borderColor: 'var(--border)' }}
        >
          <motion.div
            className="w-1 h-2 rounded-full"
            style={{ background: 'var(--neon)' }}
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
