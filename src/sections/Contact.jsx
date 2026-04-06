import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_i7feqyo'
const TEMPLATE_ID = 'template_ap7amch'
const PUBLIC_KEY = 'JcrQ6FdMR7ecr0m44'

const socialLinks = [
  {
    icon: FiLinkedin,
    name: 'LinkedIn',
    handle: 'linkedin.com/in/adidyadarmawan',
    url: 'https://linkedin.com/in/adidyadarmawan',
  },
  {
    icon: FiGithub,
    name: 'GitHub',
    handle: 'github.com/AdidyaDmwan',
    url: 'https://github.com/AdidyaDmwan',
  },
  {
    icon: FiMail,
    name: 'Email',
    handle: 'adidyadarmawan12@gmail.com',
    url: 'mailto:adidyadarmawan12@gmail.com',
  },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }

    setStatus('sending')

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      PUBLIC_KEY
    )
      .then(() => {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(''), 4000)
      })
      .catch(() => {
        setStatus('failed')
      })
  }

  return (
    <section id="contact" className="py-24 bg-surface-alt">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-3">
            Get <span className="text-primary">In Touch</span>
          </h2>
          <p className="text-muted text-sm">Lets work together or just say hi!</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-body mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-body placeholder:text-placeholder text-sm focus:outline-none focus:border-primary transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-body mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-body placeholder:text-placeholder text-sm focus:outline-none focus:border-primary transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-body mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-body placeholder:text-placeholder text-sm focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-500">Please fill in all fields.</p>
              )}
              {status === 'sending' && (
                <p className="text-sm text-blue-500">Sending message...</p>
              )}
              {status === 'success' && (
                <p className="text-sm text-green-600">Message sent successfully! I will get back to you soon.</p>
              )}
              {status === 'failed' && (
                <p className="text-sm text-red-500">Failed to send. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-80"
          >
            <p className="text-base font-semibold text-heading mb-4">Find Me</p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white border border-border rounded-xl hover:border-primary-border hover:shadow-sm transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-200">
                      <Icon className="text-primary group-hover:text-white transition-colors duration-200" size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-heading">{social.name}</p>
                      <p className="text-xs text-muted">{social.handle}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact