// src/components/Footer.jsx
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiYoutube, FiHeart } from 'react-icons/fi'

const navLinks = [
  { label: 'About',       href: '#about' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact',     href: '#contact' },
]

const socials = [
  { Icon: FiGithub,   href: 'https://github.com/devit2003',      label: 'GitHub' },
  { Icon: FiLinkedin, href: 'https://linkedin.com/in/devitsaputra', label: 'LinkedIn' },
  { Icon: FiMail,     href: 'mailto:devit.saputra@mhs.itenas.ac.id',             label: 'Email' },
  { Icon: FiYoutube,  href: 'https://youtube.com/@devitsaputra',    label: 'YouTube' },
]

const Footer = () => {
  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative" style={{ background: 'var(--bg-secondary)' }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-display text-2xl font-bold glow-text">
              DS<span style={{ color: 'var(--neon)' }}>.</span>
            </div>
            <p className="font-body text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-secondary)' }}>
              AI & Machine Learning Engineer passionate about building intelligent systems
              that make a real-world impact.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--neon)'
                    e.currentTarget.style.color = 'var(--neon)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: 'var(--text-muted)' }}>
              Quick Links
            </div>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={e => handleNav(e, href)}
                    className="font-body text-sm transition-colors duration-200 hover:text-current"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--neon)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: 'var(--text-muted)' }}>
              Contact
            </div>
            <div className="space-y-2">
              {[
                { label: 'Email',    value: 'devit.saputra@mhs.itenas.ac.id' },
                { label: 'Location', value: 'Bandung, Indonesia' },
                { label: 'Status',   value: 'Open to opportunities' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                    {label}
                  </span>
                  <span className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {label === 'Status'
                      ? <span style={{ color: '#22c55e' }}>● {value}</span>
                      : value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Devit Saputra. All rights reserved.
          </p>
          <p className="font-mono text-xs flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
            Built with <FiHeart size={11} style={{ color: '#ef4444' }} /> using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
