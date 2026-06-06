// src/components/About.jsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBook, FiAward, FiTarget, FiCode } from 'react-icons/fi'

const education = [
  {
    degree: 'S1 Teknik Informatika',
    school: 'Institut Teknologi Nasional Bandung (ITENAS)',
    year: '2022 – Sekarang',
    note: 'IPK: 3.41 / 4.00',
    icon: '🎓',
    active: true,
  },
]

const highlights = [
  { icon: FiBook,   label: 'Minat Utama',    value: 'Computer Vision & NLP' },
  { icon: FiAward,  label: 'IPK',            value: '3.41 / 4.00' },
  { icon: FiCode,   label: 'Tech Stack',     value: 'Python · YOLOv8 · Flask · RAG' },
  { icon: FiTarget, label: 'Career Goal',    value: 'AI / ML Engineer' },
]

const focuses = [
  { label: 'Machine Learning',         emoji: '🤖' },
  { label: 'Deep Learning',            emoji: '🧠' },
  { label: 'Computer Vision',          emoji: '👁️' },
  { label: 'Natural Language Processing', emoji: '💬' },
  { label: 'Agentic AI / RAG',         emoji: '✨' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />

      <div className="section-container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeUp} className="mb-16 max-w-2xl">
            <div className="tag mb-4 inline-flex">Tentang Saya</div>
            <h2 className="section-title mb-4">
              Passionate membangun{' '}
              <span className="glow-text">sistem cerdas</span>
            </h2>
            <p className="section-subtitle">
              Mahasiswa tingkat akhir Teknik Informatika yang fokus pada AI, Machine Learning, dan Computer Vision.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div className="space-y-8">
              <motion.div variants={fadeUp}>
                <p className="font-body text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Saya adalah mahasiswa tingkat akhir Program Studi Teknik Informatika di Institut Teknologi
                  Nasional Bandung (ITENAS) dengan minat dan fokus pada bidang Machine Learning, Artificial
                  Intelligence, Computer Vision, dan Natural Language Processing.
                </p>
                <p className="font-body text-base leading-relaxed mt-4" style={{ color: 'var(--text-secondary)' }}>
                  Saya memiliki pengalaman mengembangkan berbagai proyek berbasis AI menggunakan Python,
                  PyTorch, TensorFlow, Hugging Face, YOLOv8, dan teknologi pendukung lainnya — termasuk
                  kerja praktik membangun sistem NutriBot di Torche Indonesia.
                </p>
                <p className="font-body text-base leading-relaxed mt-4" style={{ color: 'var(--text-secondary)' }}>
                  Saat ini sedang mencari kesempatan <span style={{ color: 'var(--neon)' }}>magang atau pekerjaan</span> yang
                  dapat memberikan pengalaman profesional dan memungkinkan pengembangan kompetensi di bidang AI dan Machine Learning.
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="font-display text-sm font-semibold uppercase tracking-widest mb-4"
                  style={{ color: 'var(--text-muted)' }}>
                  Focus Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {focuses.map(({ label, emoji }) => (
                    <motion.span
                      key={label}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl font-body text-sm font-medium"
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                      }}
                      whileHover={{ scale: 1.04, borderColor: 'var(--neon)', color: 'var(--neon)' }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <span>{emoji}</span> {label}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
                {highlights.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="card-glass p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={14} style={{ color: 'var(--neon)' }} />
                      <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                        {label}
                      </span>
                    </div>
                    <div className="font-display text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {value}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Education */}
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest mb-6"
                style={{ color: 'var(--text-muted)' }}>
                Pendidikan
              </h3>

              <div className="relative space-y-6">
                <div className="absolute left-6 top-6 bottom-6 w-px timeline-line opacity-30" />

                {education.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                  >
                    <div className="relative flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl z-10 relative"
                        style={{
                          background: item.active
                            ? 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))'
                            : 'var(--bg-secondary)',
                          border: '2px solid var(--border)',
                        }}
                      >
                        {item.icon}
                      </div>
                      {item.active && (
                        <div className="absolute -inset-1 rounded-xl opacity-30 blur-md"
                          style={{ background: 'var(--gradient-start)' }} />
                      )}
                    </div>

                    <div
                      className="card-glass flex-1 p-5"
                      style={item.active ? {
                        borderColor: 'rgba(14, 165, 233, 0.3)',
                        boxShadow: '0 0 20px rgba(14, 165, 233, 0.08)',
                      } : {}}
                    >
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <div className="font-display text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                          {item.degree}
                        </div>
                        {item.active && (
                          <span className="tag text-[10px] flex-shrink-0">Aktif</span>
                        )}
                      </div>
                      <div className="font-body text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                        {item.school}
                      </div>
                      <div className="flex items-center gap-3 mt-3 flex-wrap">
                        <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                          {item.year}
                        </span>
                        <span className="w-1 h-1 rounded-full" style={{ background: 'var(--border)' }} />
                        <span className="font-mono text-xs" style={{ color: 'var(--neon)' }}>
                          {item.note}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info Card */}
              <div className="card-glass p-6 mt-6 space-y-3">
                <h4 className="font-display text-sm font-semibold uppercase tracking-widest"
                  style={{ color: 'var(--text-muted)' }}>Kontak</h4>
                {[
                  { label: '📧 Email', value: 'devit.saputra@mhs.itenas.ac.id' },
                  { label: '📱 Phone', value: '+6282290234298' },
                  { label: '📍 Lokasi', value: 'Bandung, Indonesia' },
                  { label: '🐙 GitHub', value: 'github.com/devit2003' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="font-mono text-xs w-20 flex-shrink-0" style={{ color: 'var(--text-muted)' }}>{label}</span>
                    <span className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
