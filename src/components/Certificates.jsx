// src/components/Certificates.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiX, FiDownload, FiExternalLink, FiAward } from 'react-icons/fi'
import { certificates } from '../data/certificates'

const CertCard = ({ cert, onClick, inView, index }) => (
  <motion.div
    className="group card-glass overflow-hidden cursor-pointer"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={inView ? { opacity: 1, scale: 1 } : {}}
    transition={{ delay: index * 0.08, duration: 0.6 }}
    whileHover={{ scale: 1.03, y: -4 }}
    onClick={() => onClick(cert)}
  >
    {/* Thumbnail */}
    <div className="relative overflow-hidden h-40">
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        style={{ background: 'rgba(5,10,20,0.6)', backdropFilter: 'blur(4px)' }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white"
          style={{ background: 'var(--gradient-start)' }}
        >
          <FiExternalLink size={18} />
        </div>
      </div>
    </div>

    {/* Info */}
    <div className="p-4">
      <div className="flex items-start gap-2">
        <FiAward size={14} style={{ color: 'var(--neon)', flexShrink: 0, marginTop: 2 }} />
        <div>
          <div className="font-display text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
            {cert.title}
          </div>
          <div className="font-body text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
            {cert.issuer}
          </div>
          <div className="font-mono text-[10px] mt-1.5" style={{ color: 'var(--text-muted)' }}>
            {cert.date}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

const Modal = ({ cert, onClose }) => (
  <AnimatePresence>
    {cert && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }} />

        {/* Card */}
        <motion.div
          className="relative max-w-2xl w-full rounded-2xl overflow-hidden z-10"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          initial={{ scale: 0.85, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.85, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Image */}
          <img src={cert.image} alt={cert.title} className="w-full h-64 object-cover" />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center text-white"
            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
          >
            <FiX size={18} />
          </button>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {cert.title}
                </h3>
                <p className="font-body text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                  {cert.issuer}
                </p>
                <p className="font-mono text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                  Issued: {cert.date}
                </p>
              </div>
              <div className="flex gap-2">
                <a href={cert.credential} target="_blank" rel="noopener noreferrer"
                  className="btn-outline text-xs py-2 px-4">
                  <FiExternalLink size={13} /> View
                </a>
                <a href={cert.image} download
                  className="btn-primary text-xs py-2 px-4">
                  <FiDownload size={13} />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

const Certificates = () => {
  const [selected, setSelected] = useState(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <>
      <section id="certificates" className="relative">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />

        <div className="section-container" ref={ref}>
          {/* Header */}
          <motion.div
            className="text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="tag mb-4 inline-flex">Certificates</div>
            <h2 className="section-title mb-4">
              Credentials &amp; <span className="glow-text">Achievements</span>
            </h2>
            <p className="section-subtitle">
              Certifications from world-class institutions validating my expertise in AI and ML.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificates.map((cert, i) => (
              <CertCard
                key={cert.id}
                cert={cert}
                onClick={setSelected}
                inView={inView}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <Modal cert={selected} onClose={() => setSelected(null)} />
    </>
  )
}

export default Certificates
