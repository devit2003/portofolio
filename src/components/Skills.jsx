// src/components/Skills.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skillCategories } from '../data/skills'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const SkillBar = ({ name, level, color, inView, delay }) => (
  <motion.div
    className="space-y-1.5"
    initial={{ opacity: 0, x: -20 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay, duration: 0.6 }}
  >
    <div className="flex justify-between items-center">
      <span className="font-body text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
        {name}
      </span>
      <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
        {level}%
      </span>
    </div>
    <div className="progress-bar">
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, var(--gradient-end))` }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ delay: delay + 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  </motion.div>
)

const Skills = () => {
  const [activeTab, setActiveTab] = useState('ai')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const active = skillCategories.find(c => c.id === activeTab)

  return (
    <section id="skills" className="relative" style={{ background: 'var(--bg-secondary)' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />

      <div className="section-container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-12 max-w-2xl mx-auto">
            <div className="tag mb-4 inline-flex">Skills & Expertise</div>
            <h2 className="section-title mb-4">
              My <span className="glow-text">Technical Arsenal</span>
            </h2>
            <p className="section-subtitle">
              A focused toolkit built through hands-on projects, research, and continuous learning.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 justify-center mb-10">
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-display text-sm font-semibold transition-all duration-200"
                style={activeTab === cat.id ? {
                  background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(14, 165, 233, 0.3)',
                } : {
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <div
                className="card-glass p-8"
                style={{ borderColor: `${active.color}30` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${active.color}20`, border: `1px solid ${active.color}30` }}
                  >
                    {active.icon}
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                      {active.label}
                    </div>
                    <div className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                      {active.skills.length} skills
                    </div>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-5">
                  {active.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={active.color}
                      inView={inView}
                      delay={i * 0.1}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Tech cloud */}
          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap(c => c.skills).map(s => (
              <motion.span
                key={s.name}
                className="px-3 py-1.5 rounded-lg font-mono text-xs"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
                whileHover={{
                  borderColor: 'var(--neon)',
                  color: 'var(--neon)',
                  scale: 1.05,
                }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {s.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
