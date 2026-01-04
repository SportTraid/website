'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Persistent Memory',
    icon: '🧠',
    description: 'Triad adapts to each athlete over time, remembering age, sport, goals, and challenges to deliver personalized guidance.'
  },
  {
    title: 'Journaling',
    icon: '📓',
    description: 'Structured reflection for confidence, pressure, performance, and identity—understood, connected, and built over time.'
  },
  {
    title: 'Knowledge Graph Memory',
    icon: '🧩',
    description: 'Emotional patterns, triggers, progress, setbacks, and family context stay connected—so conversations never reset.'
  },
  {
    title: 'Privacy',
    icon: '🔒',
    description: 'No public model training. Private, siloed memory per user. Parent-controlled access for minors—by design.'
  },
  {
    title: 'Conversational Intelligence',
    icon: '💬',
    description: 'Triad isn\'t a generic chatbot. Its a conversational system built specifically to help young athletes improve the necessary cognitive tools to reach their potential both on the field and in life.'
  },
  {
    title: 'Intelligent Nudges',
    icon: '✨',
    description: 'Subtle, timely nudges reinforce confidence, resilience, and healthy mindset habits—without adding pressure.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" ref={ref} className="py-16 md:py-20 px-6 sm:px-8 lg:px-12 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            How Triad Works
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 feature-grid-new"
        >
          {/* Left Column */}
          {/* Persistent Memory - 75% height (rows 1-3) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="feature-card bg-[#1a1a1a] rounded-3xl px-6 pt-6 md:px-8 md:pt-8 pb-[1.8rem] md:pb-[2.4rem] hover:bg-[#252525] transition-all duration-300 group relative overflow-hidden flex flex-col persistent-memory"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="text-6xl md:text-7xl mb-6" style={{ filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.5))' }}>{features[0].icon}</div>
              <div className="flex-grow flex flex-col">
                <h3 className="mb-2 text-white group-hover:text-white transition-colors" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 'calc(1.5rem * 1.5)', letterSpacing: '-0.068em' }}>
                  <span className="md:hidden">{features[0].title}</span>
                  <span className="hidden md:inline" style={{ fontSize: 'calc(1.875rem * 1.5)' }}>{features[0].title}</span>
                </h3>
                <p className="text-white mb-4 leading-relaxed text-base md:text-lg flex-grow">
                  {features[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Journaling - 25% height (row 4) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="feature-card bg-[#1a1a1a] rounded-3xl px-4 pt-4 md:px-6 md:pt-6 pb-[1.2rem] md:pb-[1.8rem] hover:bg-[#252525] transition-all duration-300 group relative overflow-hidden flex flex-row items-start gap-3 journaling"
          >
            <div className="relative z-10 flex flex-row items-start gap-4 w-full">
              <div className="text-4xl md:text-5xl flex-shrink-0">{features[1].icon}</div>
              <div className="flex-grow">
                <h3 className="mb-1 text-white group-hover:text-white transition-colors" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 'calc(1.25rem * 1.5)', letterSpacing: '-0.068em' }}>
                  <span className="md:hidden">{features[1].title}</span>
                  <span className="hidden md:inline" style={{ fontSize: 'calc(1.5rem * 1.5)' }}>{features[1].title}</span>
                </h3>
                <p className="text-white mb-1.5 leading-relaxed text-sm md:text-base">
                  {features[1].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          {/* Knowledge Graph - 25% height (row 1) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="feature-card bg-[#1a1a1a] rounded-3xl px-4 pt-4 md:px-6 md:pt-6 pb-[1.2rem] md:pb-[1.8rem] hover:bg-[#252525] transition-all duration-300 group relative overflow-hidden flex flex-row items-start gap-4 knowledge-graph"
          >
            <div className="relative z-10 flex flex-row items-start gap-4 w-full">
              <div className="text-4xl md:text-5xl flex-shrink-0">{features[2].icon}</div>
              <div className="flex-grow">
                <h3 className="mb-1 text-white group-hover:text-white transition-colors" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 'calc(1.25rem * 1.5)', letterSpacing: '-0.068em' }}>
                  <span className="md:hidden">{features[2].title}</span>
                  <span className="hidden md:inline" style={{ fontSize: 'calc(1.5rem * 1.5)' }}>{features[2].title}</span>
                </h3>
                <p className="text-white mb-1.5 leading-relaxed text-sm md:text-base">
                  {features[2].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Privacy - 75% height (rows 2-4) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="feature-card bg-[#1a1a1a] rounded-3xl px-6 pt-6 md:px-8 md:pt-8 pb-[1.8rem] md:pb-[2.4rem] hover:bg-[#252525] transition-all duration-300 group relative overflow-hidden flex flex-col privacy"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="text-6xl md:text-7xl mb-6" style={{ filter: 'drop-shadow(0 0 8px rgba(234, 179, 8, 0.5))' }}>{features[3].icon}</div>
              <div className="flex-grow flex flex-col">
                <h3 className="mb-2 text-white group-hover:text-white transition-colors" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 'calc(1.5rem * 1.5)', letterSpacing: '-0.068em' }}>
                  <span className="md:hidden">{features[3].title}</span>
                  <span className="hidden md:inline" style={{ fontSize: 'calc(1.875rem * 1.5)' }}>{features[3].title}</span>
                </h3>
                <p className="text-white mb-4 leading-relaxed text-base md:text-lg flex-grow">
                  {features[3].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* New Row - Cards 5 & 6 */}
          {/* Conversational Intelligence - 50% width, small height */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="feature-card bg-[#1a1a1a] rounded-3xl px-4 pt-4 md:px-6 md:pt-6 pb-[1.2rem] md:pb-[1.8rem] hover:bg-[#252525] transition-all duration-300 group relative overflow-hidden flex flex-row items-start gap-4 conversational-intelligence"
          >
            <div className="relative z-10 flex flex-row items-start gap-4 w-full">
              <div className="text-4xl md:text-5xl flex-shrink-0">{features[4].icon}</div>
              <div className="flex-grow">
                <h3 className="mb-1 text-white group-hover:text-white transition-colors" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 'calc(1.25rem * 1.5)', letterSpacing: '-0.068em' }}>
                  <span className="md:hidden">{features[4].title}</span>
                  <span className="hidden md:inline" style={{ fontSize: 'calc(1.5rem * 1.5)' }}>{features[4].title}</span>
                </h3>
                <p className="text-white mb-1.5 leading-relaxed text-sm md:text-base">
                  {features[4].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Intelligent Nudges - 50% width, small height */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="feature-card bg-[#1a1a1a] rounded-3xl px-4 pt-4 md:px-6 md:pt-6 pb-[1.2rem] md:pb-[1.8rem] hover:bg-[#252525] transition-all duration-300 group relative overflow-hidden flex flex-row items-start gap-4 intelligent-nudges"
          >
            <div className="relative z-10 flex flex-row items-start gap-4 w-full">
              <div className="text-4xl md:text-5xl flex-shrink-0">{features[5].icon}</div>
              <div className="flex-grow">
                <h3 className="mb-1 text-white group-hover:text-white transition-colors" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, fontSize: 'calc(1.25rem * 1.5)', letterSpacing: '-0.068em' }}>
                  <span className="md:hidden">{features[5].title}</span>
                  <span className="hidden md:inline" style={{ fontSize: 'calc(1.5rem * 1.5)' }}>{features[5].title}</span>
                </h3>
                <p className="text-white mb-1.5 leading-relaxed text-sm md:text-base">
                  {features[5].description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

