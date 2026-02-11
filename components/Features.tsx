'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    badge: 'Memory',
    headline: 'It never forgets any detail',
    description: 'Persistent memory using Knowledge Graphs — adapting to each athlete over time, remembering goals, challenges, and progress.',
  },
  {
    badge: 'Journaling',
    headline: 'Reflect, grow, repeat',
    description: 'Structured reflection for confidence, pressure, performance, and identity — understood, connected, and built over time.',
  },
  {
    badge: 'Knowledge Graph',
    headline: 'Everything stays connected',
    description: 'Emotional patterns, triggers, progress, setbacks, and family context stay linked — so conversations never reset.',
  },
  {
    badge: 'Privacy',
    headline: 'Your data stays yours',
    description: 'No public model training. Private, siloed memory per user. Parent-controlled access for minors — by design.',
  },
  {
    badge: 'Intelligence',
    headline: 'More than a chatbot',
    description: 'A conversational system built specifically to help young athletes improve the cognitive tools to reach their potential.',
  },
  {
    badge: 'Nudges',
    headline: 'Gentle at the right time',
    description: 'Subtle, timely nudges that reinforce confidence, resilience, and healthy mindset habits — without adding pressure.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 md:py-28 px-6 sm:px-8 lg:px-12 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-syne !font-normal text-foreground leading-[1.1] mb-4 !normal-case" style={{ fontSize: 'clamp(1.5rem, 6vw, 6.5rem)', fontWeight: 400, letterSpacing: '-0.03em', maxWidth: '75vw', textTransform: 'none' }}>
            How triad works
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="stroke-card"
            >
              <span className="badge">{feature.badge}</span>
              <h1 className="font-ibm-plex-mono font-normal uppercase tracking-wide text-foreground leading-tight" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}>
                {feature.headline}
              </h1>
              <p className="text-muted-foreground leading-relaxed font-inter" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
