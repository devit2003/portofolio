// src/components/Contact.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiLinkedin, FiMail, FiYoutube, FiSend, FiCheck } from 'react-icons/fi'

const socials = [
  { Icon: FiGithub,   label: 'GitHub',   href: 'https://github.com/devit2003',      color: '#6e7681' },
  { Icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/devitsaputra', color: '#0077b5' },
  { Icon: FiMail,     label: 'Email',    href: 'mailto:devrafaezya34@gmail.com',             color: '#ea4335' },
  { Icon: FiYoutube,  label: 'YouTube',  href: 'https://youtube.com/@devitsaputra',    color: '#ff0000' },
]

const validate = values => {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Name is required'
  if (!values.email.trim()) errors.email = 'Email is required'
  else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Invalid email address'
  if (!values.subject.trim()) errors.subject = 'Subject is required'
  if (!values.message.trim()) errors.message = 'Message is required'
  else if (values.message.trim().length < 20) errors.message = 'Message must be at least 20 characters'
  return errors
}

const Field = ({ label, name, type = 'text', placeholder, value, onChange, error, rows }) => (
  <div className="space-y-1.5">
    <label className="font-display text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
      {label}
    </label>
    {rows ? (
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none resize-none transition-all duration-200"
        style={{
          background: 'var(--bg-secondary)',
          border: `1px solid ${error ? '#ef4444' : 'var(--border)'}`,
          color: 'var(--text-primary)',
        }}
        onFocus={e => e.target.style.borderColor = error ? '#ef4444' : 'var(--neon)'}
        onBlur={e => e.target.style.borderColor = error ? '#ef4444' : 'var(--border)'}
      />
    ) : (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none transition-all duration-200"
        style={{
          background: 'var(--bg-secondary)',
          border: `1px solid ${error ? '#ef4444' : 'var(--border)'}`,
          color: 'var(--text-primary)',
        }}
        onFocus={e => e.target.style.borderColor = error ? '#ef4444' : 'var(--neon)'}
        onBlur={e => e.target.style.borderColor = error ? '#ef4444' : 'var(--border)'}
      />
    )}
    {error && <p className="font-mono text-xs text-red-400">{error}</p>}
  </div>
)

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async () => {
    const errs = validate(values)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    // Build mailto link to send message to the target email
    setLoading(true)
    const to = 'devrafaezya34@gmail.com'
    const subject = encodeURIComponent(values.subject || 'No subject')
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`
    )
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`
    // Open user's mail client with prefilled email. User must confirm send in their client.
    window.location.href = mailto
    // mark submitted after short delay
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section id="contact" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="tag mb-4 inline-flex">Get In Touch</div>
          <h2 className="section-title mb-4">
            Let's <span className="glow-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Open to internships, collaborations, or just a conversation about AI. Drop me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left: Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div>
              <h3 className="font-display text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Contact Info
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Based in Bandung, Indonesia. Available for remote work and relocation.
              </p>
            </div>

            <div className="space-y-3">
              {socials.map(({ Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 card-glass group"
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {label}
                    </div>
                    <div className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                      @devitsaputra
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3 card-glass p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full text-center py-12 gap-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(0,245,212,0.15)', border: '2px solid var(--neon)' }}
                >
                  <FiCheck size={28} style={{ color: 'var(--neon)' }} />
                </div>
                <div className="font-display text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  Message Sent!
                </div>
                <p className="font-body text-sm max-w-xs" style={{ color: 'var(--text-secondary)' }}>
                  Thanks for reaching out. I'll get back to you within 24–48 hours.
                </p>
                <button onClick={() => { setSubmitted(false); setValues({ name: '', email: '', subject: '', message: '' }) }}
                  className="btn-outline text-sm mt-2">
                  Send Another
                </button>
              </motion.div>
            ) : (
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" placeholder="Devit Saputra" value={values.name} onChange={handleChange} error={errors.name} />
                  <Field label="Email" name="email" type="email" placeholder="hello@example.com" value={values.email} onChange={handleChange} error={errors.email} />
                </div>
                <Field label="Subject" name="subject" placeholder="Internship Opportunity" value={values.subject} onChange={handleChange} error={errors.subject} />
                <Field label="Message" name="message" placeholder="Tell me about your project or opportunity..." value={values.message} onChange={handleChange} error={errors.message} rows={5} />

                <motion.button
                  onClick={handleSubmit}
                  className="btn-primary w-full justify-center py-3.5"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.01 } : {}}
                  whileTap={!loading ? { scale: 0.99 } : {}}
                >
                  {loading ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
