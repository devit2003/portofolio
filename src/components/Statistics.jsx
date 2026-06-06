// src/components/Statistics.jsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const stats = [
  { value: 6,  suffix: '+', label: 'Total Projects',        emoji: '🚀' },
  { value: 10, suffix: '+', label: 'GitHub Repositories',   emoji: '📦' },
  { value: 47, suffix: '',  label: 'Food Classes (YOLOv8)', emoji: '🍱' },
  { value: 8,  suffix: '',  label: 'Skin Disease Classes',  emoji: '🔬' },
]

const Statistics = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="relative py-20" style={{ background: 'var(--bg-secondary)' }} ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] blur-[80px] opacity-[0.06]"
          style={{ background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-end))' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="card-glass p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.04, y: -4 }}
            >
              <div className="text-3xl mb-3">{stat.emoji}</div>
              <div className="font-display text-4xl font-extrabold mb-1 glow-text">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} delay={0.3 + i * 0.1} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
