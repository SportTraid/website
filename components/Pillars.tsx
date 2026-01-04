'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  {
    title: 'Players',
    description: 'Triad is your on-demand cognitive performance coach, helping you handle setbacks, nerves, and motivation dips. It turns daily conversations into habits that show up in training, on game day, and in life.',
    highlight: 'Build confidence, resilience, and self-belief'
  },
  {
    title: 'Parents',
    description: 'Triad is a coach for the parent journey too. It helps you respond better in the moments that matter and support your child without added stress.',
    highlight: 'Support without pressure or conflict'
  },
  {
    title: 'Coaches',
    description: 'Triad makes the hardest parts of coaching feel more manageable. You\'ll have support for conversations, conflict, confidence, and growth.',
    highlight: 'Grow beyond the X\'s and O\'s of coaching.'
  }
]

export default function Pillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Built for each pillar involved in youth athlete development
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            That's why we're called Triad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative"
            >
              <div className="absolute -top-4 left-4 z-10">
                <span className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-white/20 leading-none">
                  {index + 1}
                </span>
              </div>
              <div className="bg-card border border-white/10 rounded-2xl p-8 pt-12 hover:bg-card-hover transition-all duration-300 group min-h-[400px] flex flex-col relative z-0">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-base sm:text-lg flex-grow">
                  {pillar.description}
                </p>
                <p className="text-gray-300 font-medium text-sm sm:text-base italic">
                  {pillar.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

