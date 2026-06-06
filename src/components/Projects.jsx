// src/components/Projects.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiYoutube } from 'react-icons/fi'
import { projects } from '../data/projects'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const ProjectCard = ({ project, index, inView }) => (
  <motion.div
    className="group relative card-glass overflow-hidden flex flex-col"
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -6 }}
  >
    {/* Thumbnail */}
    <div className="relative overflow-hidden h-48">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      {/* Category badge */}
      <div className="absolute top-3 left-3">
        <span className="tag text-[10px]">{project.category}</span>
      </div>
      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
        style={{ background: 'rgba(5, 10, 20, 0.7)', backdropFilter: 'blur(4px)' }}
      >
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
          aria-label="GitHub">
          <FiGithub size={18} />
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
          aria-label="Live Demo">
          <FiExternalLink size={18} />
        </a>
        <a href={project.youtube} target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
          aria-label="YouTube">
          <FiYoutube size={18} />
        </a>
      </div>

      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: 'inset 0 0 40px rgba(14,165,233,0.15)' }}
      />
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-6">
      <h3 className="font-display text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
        {project.title}
      </h3>
      <p className="font-body text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map(t => (
          <span key={t} className="tag text-[10px]">{t}</span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="flex-1 btn-outline text-xs justify-center py-2 px-3">
          <FiGithub size={13} /> GitHub
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer"
          className="flex-1 btn-outline text-xs justify-center py-2 px-3">
          <FiExternalLink size={13} /> Demo
        </a>
        <a href={project.youtube} target="_blank" rel="noopener noreferrer"
          className="flex-1 btn-outline text-xs justify-center py-2 px-3">
          <FiYoutube size={13} /> Video
        </a>
      </div>
    </div>

    {/* Glow border effect */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style={{ boxShadow: '0 0 0 1px rgba(14,165,233,0.3), 0 0 30px rgba(14,165,233,0.08)' }}
    />
  </motion.div>
)

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />

      <div className="section-container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-12 max-w-2xl mx-auto">
            <div className="tag mb-4 inline-flex">Projects</div>
            <h2 className="section-title mb-4">
              Things I've <span className="glow-text">Built</span>
            </h2>
            <p className="section-subtitle">
              From multimodal AI systems to mobile applications — projects that push boundaries and solve real problems.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="px-4 py-2 rounded-xl font-display text-sm font-medium transition-all duration-200"
                style={filter === cat ? {
                  background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                  color: 'white',
                } : {
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} inView={inView} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
