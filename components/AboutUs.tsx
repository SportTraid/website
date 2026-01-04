'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <div ref={ref} className="min-h-screen pt-32 pb-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, letterSpacing: '-0.068em' }}>
              About Us — <span className="gradient-text">Sport Triad</span>
            </h1>
          </motion.div>

          {/* Opening Statement */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Triad was built from a hard truth we've seen for over 20 years of coaching across youth, college, and the professional game:
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Some of the most talented athletes don't fall short because of ability. They fall short because they aren't equipped cognitively to handle what sport is demanding of them.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              We've watched confident players freeze under pressure. We've seen athletes avoid risk because fear of failure feels safer than making a mistake. We've seen players with every technical tool still struggle because they never learned how to reset, self-regulate, refocus, or respond when the game gets hard.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Not because they don't care.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Because nobody ever taught them how.
            </p>
          </motion.div>

          {/* The Missing Pillar Section */}
          <motion.div variants={itemVariants} className="space-y-6 pt-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, letterSpacing: '-0.068em' }}>
              The Missing Pillar
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Youth development pours time into three pillars: technical, tactical, and physical. But the cognitive pillar-confidence, composure, resilience, focus, decision-making often gets ignored.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Even in many coaching education pathways, the cognitive side is rarely a priority. Coaches learn structure, systems, and session design, but the tools that help a young athlete battle fear head-on, stay consistent, and grow through adversity are frequently left out.
            </p>
            <p className="text-xl sm:text-2xl text-white leading-relaxed font-medium">
              Yet cognitive strength is the multiplier.
            </p>
          </motion.div>

          {/* Benefits List */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              When athletes build cognitive tools, everything improves:
            </p>
            <ul className="space-y-3 text-lg sm:text-xl text-gray-300 leading-relaxed list-none pl-0">
              <li className="flex items-start">
                <span className="text-gray-500 mr-3">•</span>
                <span>They learn faster because they aren't afraid to fail</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3">•</span>
                <span>They compete freer because pressure doesn't control them</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3">•</span>
                <span>They take feedback better because it becomes information, not identity</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3">•</span>
                <span>They stay in sport longer because their relationship with performance is healthier</span>
              </li>
            </ul>
          </motion.div>

          {/* Our Mission Section */}
          <motion.div variants={itemVariants} className="space-y-6 pt-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, letterSpacing: '-0.068em' }}>
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Triad exists to help athletes train the mind like they train the body,with real tools they can use daily.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              We're here to help young athletes:
            </p>
            <ul className="space-y-3 text-lg sm:text-xl text-gray-300 leading-relaxed list-none pl-0">
              <li className="flex items-start">
                <span className="text-gray-500 mr-3">•</span>
                <span>Accept where they are without shame</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3">•</span>
                <span>Believe change is possible through consistent habits</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3">•</span>
                <span>Become more courageous in the moments that matter</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3">•</span>
                <span>Face fear instead of avoiding it</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3">•</span>
                <span>Build the inner skills that unlock their potential</span>
              </li>
            </ul>
          </motion.div>

          {/* Closing Statement */}
          <motion.div variants={itemVariants} className="space-y-6 pt-8">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Because the goal isn't just better performance.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              It's helping kids grow into confident young athletes and ultimately into resilient, productive adults who know how to handle pressure, adversity, and challenge in sport and in life.
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl text-white leading-relaxed font-bold text-center pt-8" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, letterSpacing: '-0.068em' }}>
              When we develop the mind, we don't just build better athletes,
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl gradient-text leading-relaxed font-bold text-center" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, letterSpacing: '-0.068em' }}>
              We build stronger humans.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

