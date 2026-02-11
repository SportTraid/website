'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  {
    badge: 'Players',
    headline: 'Build confidence, resilience, and self-belief',
    description: 'Triad helps you handle setbacks, nerves, and motivation dips. It turns daily conversations into habits that show up in training and on game day.',
  },
  {
    badge: 'Parents',
    headline: 'Support without pressure or conflict',
    description: 'Triad is a coach for the parent journey too. It helps you respond better in the moments that matter and support your child without added stress.',
  },
  {
    badge: 'Coaches',
    headline: 'Grow beyond the X\'s and O\'s of coaching',
    description: 'Triad makes the hardest parts of coaching feel more manageable. You\'ll have support for conversations, conflict, confidence, and growth.',
  },
]

export default function Pillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-syne !font-normal text-foreground leading-[1.1] mb-4 !normal-case" style={{ fontSize: 'clamp(1.5rem, 6vw, 6.5rem)', fontWeight: 400, letterSpacing: '-0.03em', maxWidth: '75vw', textTransform: 'none' }}>
            Built for each pillar
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            That&apos;s why we&apos;re called Triad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="stroke-card h-full">
                <span className="badge">{pillar.badge}</span>
                <h1 className="font-ibm-plex-mono font-normal uppercase tracking-wide text-foreground leading-tight" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}>
                  {pillar.headline}
                </h1>
                <p className="text-muted-foreground leading-relaxed font-inter flex-grow" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
