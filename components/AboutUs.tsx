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
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <div ref={ref} className="min-h-screen pt-32 pb-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col gap-12"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h1
              className="font-syne font-bold mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.03em' }}
            >
              About Us — Sport Triad
            </h1>
          </motion.div>

          {/* Opening Statement */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <p className="text-fluid-lg text-muted-foreground leading-relaxed font-inter">
              Triad was built from a hard truth we&apos;ve seen for over 20 years of coaching
              across youth, college, and the professional game:
            </p>
            <p className="text-fluid-lg text-muted-foreground leading-relaxed font-inter">
              Some of the most talented athletes don&apos;t fall short because of ability. They
              fall short because they aren&apos;t equipped cognitively to handle what sport is
              demanding of them.
            </p>
            <p className="text-fluid-lg text-muted-foreground leading-relaxed font-inter">
              We&apos;ve watched confident players freeze under pressure. We&apos;ve seen
              athletes avoid risk because fear of failure feels safer than making a mistake.
              We&apos;ve seen players with every technical tool still struggle because they never
              learned how to reset, self-regulate, refocus, or respond when the game gets hard.
            </p>
            <p className="text-fluid-lg text-muted-foreground leading-relaxed font-inter">
              Not because they don&apos;t care.
            </p>
            <p className="text-fluid-lg text-foreground leading-relaxed font-inter font-medium">
              Because nobody ever taught them how.
            </p>
          </motion.div>

          {/* The Missing Pillar Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6 pt-4">
            <h2 className="text-fluid-3xl font-ibm-plex-mono font-normal uppercase tracking-wide">
              The Missing Pillar
            </h2>
            <p className="text-fluid-lg text-muted-foreground leading-relaxed font-inter">
              Youth development pours time into three pillars: technical, tactical, and physical.
              But the cognitive pillar — confidence, composure, resilience, focus, decision-making
              — often gets ignored.
            </p>
            <p className="text-fluid-lg text-muted-foreground leading-relaxed font-inter">
              Even in many coaching education pathways, the cognitive side is rarely a priority.
              Coaches learn structure, systems, and session design, but the tools that help a
              young athlete battle fear head-on, stay consistent, and grow through adversity are
              frequently left out.
            </p>
            <p className="text-fluid-xl text-foreground leading-relaxed font-syne font-semibold">
              Yet cognitive strength is the multiplier.
            </p>
          </motion.div>

          {/* Benefits List */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <p className="text-fluid-lg text-muted-foreground leading-relaxed font-inter">
              When athletes build cognitive tools, everything improves:
            </p>
            <ul className="flex flex-col gap-3 text-fluid-lg text-muted-foreground leading-relaxed list-none pl-0 font-inter">
              <li className="flex items-start">
                <span className="text-muted-foreground/40 mr-3">•</span>
                <span>They learn faster because they aren&apos;t afraid to fail</span>
              </li>
              <li className="flex items-start">
                <span className="text-muted-foreground/40 mr-3">•</span>
                <span>They compete freer because pressure doesn&apos;t control them</span>
              </li>
              <li className="flex items-start">
                <span className="text-muted-foreground/40 mr-3">•</span>
                <span>
                  They take feedback better because it becomes information, not identity
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-muted-foreground/40 mr-3">•</span>
                <span>
                  They stay in sport longer because their relationship with performance is
                  healthier
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Our Mission Section */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6 pt-4">
            <h2 className="text-fluid-3xl font-ibm-plex-mono font-normal uppercase tracking-wide">
              Our Mission
            </h2>
            <p className="text-fluid-lg text-muted-foreground leading-relaxed font-inter">
              Triad exists to help athletes train the mind like they train the body, with real
              tools they can use daily.
            </p>
            <p className="text-fluid-lg text-muted-foreground leading-relaxed font-inter">
              We&apos;re here to help young athletes:
            </p>
            <ul className="flex flex-col gap-3 text-fluid-lg text-muted-foreground leading-relaxed list-none pl-0 font-inter">
              <li className="flex items-start">
                <span className="text-muted-foreground/40 mr-3">•</span>
                <span>Accept where they are without shame</span>
              </li>
              <li className="flex items-start">
                <span className="text-muted-foreground/40 mr-3">•</span>
                <span>Believe change is possible through consistent habits</span>
              </li>
              <li className="flex items-start">
                <span className="text-muted-foreground/40 mr-3">•</span>
                <span>Become more courageous in the moments that matter</span>
              </li>
              <li className="flex items-start">
                <span className="text-muted-foreground/40 mr-3">•</span>
                <span>Face fear instead of avoiding it</span>
              </li>
              <li className="flex items-start">
                <span className="text-muted-foreground/40 mr-3">•</span>
                <span>Build the inner skills that unlock their potential</span>
              </li>
            </ul>
          </motion.div>

          {/* Closing Statement */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6 pt-4">
            <p className="text-fluid-lg text-muted-foreground leading-relaxed font-inter">
              Because the goal isn&apos;t just better performance.
            </p>
            <p className="text-fluid-lg text-muted-foreground leading-relaxed font-inter">
              It&apos;s helping kids grow into confident young athletes and ultimately into
              resilient, productive adults who know how to handle pressure, adversity, and
              challenge — in sport and in life.
            </p>
            <p
              className="text-foreground leading-tight font-syne font-bold text-center pt-8"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            >
              When we develop the mind, we don&apos;t just build better athletes —
            </p>
            <p
              className="text-foreground leading-tight font-syne font-bold text-center"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            >
              We build stronger humans.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
