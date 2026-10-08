// src/components/Contact.jsx

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiYoutube,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from 'react-icons/fi'

const socials = [
  {
    Icon: FiGithub,
    label: 'GitHub',
    href: 'https://github.com/devit2003',
    username: '@devit2003',
    color: '#6e7681',
  },
  {
    Icon: FiLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/devitsaputra',
    username: '@devitsaputra',
    color: '#0077b5',
  },
  {
    Icon: FiMail,
    label: 'Email',
    href: 'mailto:devrafaezya34@gmail.com',
    username: 'devrafaezya34@gmail.com',
    color: '#ea4335',
  },
  {
    Icon: FiYoutube,
    label: 'YouTube',
    href: 'https://youtube.com/@devitsaputra',
    username: '@devitsaputra',
    color: '#ff0000',
  },
]

const validate = (values) => {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Name is required'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.subject.trim()) {
    errors.subject = 'Subject is required'
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required'
  } else if (values.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters'
  }

  return errors
}

const Field = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  rows,
}) => (
  <div className="space-y-1.5">
    <label
      className="font-display text-sm font-medium"
      style={{ color: 'var(--text-primary)' }}
    >
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
          border: `1px solid ${
            error ? '#ef4444' : 'var(--border)'
          }`,
          color: 'var(--text-primary)',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = error
            ? '#ef4444'
            : 'var(--neon)'
        }}
        onBlur={(e) => {
          e.target.style.borderColor = error
            ? '#ef4444'
            : 'var(--border)'
        }}
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
          border: `1px solid ${
            error ? '#ef4444' : 'var(--border)'
          }`,
          color: 'var(--text-primary)',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = error
            ? '#ef4444'
            : 'var(--neon)'
        }}
        onBlur={(e) => {
          e.target.style.borderColor = error
            ? '#ef4444'
            : 'var(--border)'
        }}
      />
    )}

    {error && (
      <p className="font-mono text-xs text-red-400">
        {error}
      </p>
    )}
  </div>
)

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sendError, setSendError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }

    // Hapus error pengiriman ketika user mulai mengetik lagi
    if (sendError) {
      setSendError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Reset error sebelumnya
    setSendError('')

    // Validasi form
    const errs = validate(values)

    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setLoading(true)

    try {
      const templateParams = {
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      }

      // Kirim email menggunakan EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      // Jika berhasil
      setSubmitted(true)

      setValues({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      setErrors({})
    } catch (error) {
      console.error('EmailJS Error:', error)

      setSendError(
        'Failed to send your message. Please try again or contact me directly via email.'
      )
    } finally {
      setLoading(false)
    }
  }

  const handleSendAnother = () => {
    setSubmitted(false)
    setSendError('')
    setErrors({})
    setValues({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  return (
    <section id="contact" className="relative">
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
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
          initial={{ opacity: 0, y: 30 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6 }}
        >
          <div className="tag mb-4 inline-flex">
            Get In Touch
          </div>

          <h2 className="section-title mb-4">
            Let's{' '}
            <span className="glow-text">
              Connect
            </span>
          </h2>

          <p className="section-subtitle">
            Open to internships, collaborations,
            or just a conversation about AI.
            Drop me a message!
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* LEFT - Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={
              inView
                ? { opacity: 1, x: 0 }
                : {}
            }
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
          >
            <div>
              <h3
                className="font-display text-lg font-bold mb-2"
                style={{
                  color: 'var(--text-primary)',
                }}
              >
                Contact Info
              </h3>

              <p
                className="font-body text-sm leading-relaxed"
                style={{
                  color: 'var(--text-secondary)',
                }}
              >
                Based in Bandung, Indonesia.
                Available for remote work and
                relocation.
              </p>
            </div>

            <div className="space-y-3">
              {socials.map(
                ({
                  Icon,
                  label,
                  href,
                  username,
                  color,
                }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={
                      href.startsWith('mailto:')
                        ? undefined
                        : '_blank'
                    }
                    rel={
                      href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    className="flex items-center gap-4 p-4 card-glass group"
                    whileHover={{ x: 6 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                      style={{
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                        color,
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    <div>
                      <div
                        className="font-display text-sm font-semibold"
                        style={{
                          color:
                            'var(--text-primary)',
                        }}
                      >
                        {label}
                      </div>

                      <div
                        className="font-mono text-xs"
                        style={{
                          color:
                            'var(--text-muted)',
                        }}
                      >
                        {username}
                      </div>
                    </div>
                  </motion.a>
                )
              )}
            </div>
          </motion.div>

          {/* RIGHT - Contact Form */}
          <motion.div
            className="lg:col-span-3 card-glass p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={
              inView
                ? { opacity: 1, x: 0 }
                : {}
            }
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
          >
            {submitted ? (
              /* SUCCESS MESSAGE */
              <motion.div
                className="flex flex-col items-center justify-center h-full text-center py-12 gap-4"
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      'rgba(0,245,212,0.15)',
                    border:
                      '2px solid var(--neon)',
                  }}
                >
                  <FiCheck
                    size={28}
                    style={{
                      color: 'var(--neon)',
                    }}
                  />
                </div>

                <div
                  className="font-display text-xl font-bold"
                  style={{
                    color:
                      'var(--text-primary)',
                  }}
                >
                  Message Sent!
                </div>

                <p
                  className="font-body text-sm max-w-xs"
                  style={{
                    color:
                      'var(--text-secondary)',
                  }}
                >
                  Thanks for reaching out.
                  I'll get back to you within
                  24–48 hours.
                </p>

                <button
                  type="button"
                  onClick={handleSendAnother}
                  className="btn-outline text-sm mt-2"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              /* FORM */
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Name"
                    name="name"
                    placeholder="Devit Saputra"
                    value={values.name}
                    onChange={handleChange}
                    error={errors.name}
                  />

                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="hello@example.com"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </div>

                {/* Subject */}
                <Field
                  label="Subject"
                  name="subject"
                  placeholder="Internship Opportunity"
                  value={values.subject}
                  onChange={handleChange}
                  error={errors.subject}
                />

                {/* Message */}
                <Field
                  label="Message"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  value={values.message}
                  onChange={handleChange}
                  error={errors.message}
                  rows={5}
                />

                {/* Send Error */}
                {sendError && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{
                      background:
                        'rgba(239, 68, 68, 0.08)',
                      border:
                        '1px solid rgba(239, 68, 68, 0.25)',
                    }}
                  >
                    <FiAlertCircle
                      className="flex-shrink-0 mt-0.5 text-red-400"
                      size={18}
                    />

                    <p className="text-sm text-red-400">
                      {sendError}
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="btn-primary w-full justify-center py-3.5"
                  disabled={loading}
                  whileHover={
                    !loading
                      ? { scale: 1.01 }
                      : {}
                  }
                  whileTap={
                    !loading
                      ? { scale: 0.99 }
                      : {}
                  }
                >
                  {loading ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />

                      <span>
                        Sending...
                      </span>
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />

                      <span>
                        Send Message
                      </span>
                    </>
                  )}
                </motion.button>

                {/* Small privacy note */}
                <p
                  className="text-center font-mono text-[10px]"
                  style={{
                    color:
                      'var(--text-muted)',
                  }}
                >
                  Your message will be sent
                  directly to my email.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact