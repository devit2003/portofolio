// src/components/Publications.jsx

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiBookOpen,
  FiExternalLink,
  FiFileText,
  FiCheckCircle,
  FiClock,
} from 'react-icons/fi'

import { publications } from '../data/publications'

const PublicationCard = ({ publication, index, inView }) => {
  const isPublished =
    publication.status?.toLowerCase() === 'published'

  return (
    <motion.article
      className="card-glass p-6 mb-6"
      initial={{ opacity: 0, x: -30 }}
      animate={
        inView
          ? { opacity: 1, x: 0 }
          : {}
      }
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: isPublished
                ? 'rgba(34, 197, 94, 0.08)'
                : 'rgba(245, 158, 11, 0.08)',
              border: isPublished
                ? '1px solid rgba(34, 197, 94, 0.2)'
                : '1px solid rgba(245, 158, 11, 0.2)',
            }}
          >
            <FiBookOpen
              size={20}
              style={{
                color: isPublished
                  ? '#22c55e'
                  : '#f59e0b',
              }}
            />
          </div>

          <div>
            {/* Type */}
            <div
              className="font-mono text-xs uppercase tracking-wider mb-1"
              style={{
                color: 'var(--text-muted)',
              }}
            >
              {publication.type || 'Journal Article'}
            </div>

            {/* Title */}
            <h3
              className="font-display text-lg md:text-xl font-bold leading-snug"
              style={{
                color: 'var(--text-primary)',
              }}
            >
              {publication.title}
            </h3>
          </div>
        </div>

        {/* Status */}
        <span
          className="font-mono text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 flex-shrink-0"
          style={{
            background: isPublished
              ? 'rgba(34, 197, 94, 0.08)'
              : 'rgba(245, 158, 11, 0.08)',
            color: isPublished
              ? '#22c55e'
              : '#f59e0b',
            border: isPublished
              ? '1px solid rgba(34, 197, 94, 0.2)'
              : '1px solid rgba(245, 158, 11, 0.2)',
          }}
        >
          {isPublished ? (
            <FiCheckCircle size={12} />
          ) : (
            <FiClock size={12} />
          )}

          {publication.status || 'Accepted'}
        </span>
      </div>

      {/* Journal Information */}
      <div className="ml-0 md:ml-16">
        <div className="mb-3">
          <span
            className="font-body text-sm"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            {isPublished
              ? 'Published in'
              : 'Accepted by'}
          </span>

          <span
            className="font-body text-sm font-medium ml-2"
            style={{
              color: 'var(--text-primary)',
            }}
          >
            {publication.journal}
          </span>

          {publication.volume && (
            <>
              <span
                className="mx-2"
                style={{
                  color: 'var(--text-muted)',
                }}
              >
                •
              </span>

              <span
                className="font-mono text-xs"
                style={{
                  color: 'var(--text-muted)',
                }}
              >
                {publication.volume}
              </span>
            </>
          )}
        </div>

        {/* Year */}
        <div
          className="font-mono text-xs mb-4"
          style={{
            color: 'var(--text-muted)',
          }}
        >
          {publication.year}
        </div>

        {/* Authors */}
        {publication.authors && (
          <p
            className="font-body text-sm leading-relaxed mb-4"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            <span
              style={{
                color: 'var(--text-primary)',
              }}
            >
              Authors:
            </span>{' '}
            {publication.authors}
          </p>
        )}

        {/* Description */}
        {publication.description && (
          <p
            className="font-body text-sm leading-relaxed mb-5"
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            {publication.description}
          </p>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-2.5">
          {/* Read Paper */}
          {isPublished && publication.file && (
            <a
              href={publication.file}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <FiFileText size={15} />
              <span>Read Paper</span>
            </a>
          )}

          {/* Publication */}
          {isPublished && publication.link && (
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm"
            >
              <FiExternalLink size={15} />
              <span>Publication</span>
            </a>
          )}

          {/* LoA */}
          {!isPublished && publication.loa && (
            <a
              href={publication.loa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm"
              style={{
                color: '#f59e0b',
                borderColor: 'rgba(245, 158, 11, 0.25)',
              }}
            >
              <FiFileText size={15} />
              <span>View LoA</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  return (
    <section
      id="publications"
      className="relative"
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--border), transparent)',
        }}
      />

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--border), transparent)',
        }}
      />

      <div
        className="section-container"
        ref={ref}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-14 max-w-2xl mx-auto"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
          }}
        >
          <div className="tag mb-4 inline-flex">
            Publications
          </div>

          <h2 className="section-title mb-4">
            Research &{' '}
            <span className="glow-text">
              Publications
            </span>
          </h2>

          <p className="section-subtitle">
            Research papers, journal publications,
            and academic contributions in AI,
            technology, and information systems.
          </p>
        </motion.div>

        {/* Publications */}
        <div className="max-w-3xl mx-auto">
          {publications.map(
            (publication, index) => (
              <PublicationCard
                key={publication.id}
                publication={publication}
                index={index}
                inView={inView}
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Publications