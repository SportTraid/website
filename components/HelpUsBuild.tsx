'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function HelpUsBuild() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <a
              href="mailto:sporttriad@gmail.com"
              className="text-lg sm:text-xl md:text-2xl text-white hover:text-gray-300 transition-colors underline decoration-gray-500 hover:decoration-gray-400"
            >
              sporttriad@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

