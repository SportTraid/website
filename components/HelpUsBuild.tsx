'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function HelpUsBuild() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Reset status when user starts typing
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', organization: '' })
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id="contact"
      ref={ref} 
      className="flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-[3.168rem] pb-8 md:pt-[4.752rem] md:pb-12"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, letterSpacing: '-0.068em' }}>
            Help Us Build
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed mb-8">
            We're building something meaningful for youth sports. 
            <br />
            Join us on this journey.
          </p>
          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-6 py-4 bg-[#1a1a1a] border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all duration-300 text-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-6 py-4 bg-[#1a1a1a] border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all duration-300 text-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Organization"
                required
                className="w-full px-6 py-4 bg-[#1a1a1a] border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all duration-300 text-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="gradient-border-button"
              >
                <span className="gradient-border-button-inner">
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </span>
              </button>
            </motion.div>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-green-500/20 border border-green-500/50 rounded-2xl text-green-400"
              >
                Thank you! We've received your message and will get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-400"
              >
                {errorMessage || 'Something went wrong. Please try again.'}
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

