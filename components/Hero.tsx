'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const questions = [
  "I'm feeling anxious about the game tomorrow?",
  "How do I stay focused under pressure?",
  "How can I bounce back after a bad performance?",
]

function TypewriterChatbox() {
  const [displayText, setDisplayText] = useState('')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const currentQuestion = questions[questionIndex]

    if (!isDeleting) {
      if (displayText.length < currentQuestion.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentQuestion.slice(0, displayText.length + 1))
        }, 45 + Math.random() * 35)
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true)
        }, 2200)
      }
    } else {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 25)
      } else {
        setIsDeleting(false)
        setQuestionIndex((prev) => (prev + 1) % questions.length)
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [displayText, isDeleting, questionIndex])

  return (
    <div className="w-full max-w-2xl">
      <div className="relative flex items-center bg-foreground/[0.07] backdrop-blur-xl border border-border rounded-full px-6 py-4 gap-4">
        <span className="text-muted-foreground font-inter text-sm sm:text-base flex-grow min-h-[1.5rem] text-left">
          {displayText}
          <span className="inline-block w-[2px] h-[1.1em] bg-muted-foreground/60 ml-[1px] align-middle animate-pulse" />
        </span>
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center">
          <svg className="w-4 h-4 text-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-20 overflow-hidden">
      {/* Background gradient image */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none hero-bg"
        style={{
          backgroundImage: 'url(/assets/hero%20gradient.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-5 relative z-10">
        {/* Badge - Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <span className="badge">Coming Soon</span>
        </motion.div>

        {/* Tagline in Syne - 75% of vw, smaller clamp */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="font-syne !font-normal text-foreground leading-[1.1] !normal-case"
          style={{ 
            fontSize: 'clamp(1.5rem, 6vw, 6.5rem)',
            fontWeight: 400, 
            letterSpacing: '-0.03em',
            maxWidth: '75vw',
            width: '75vw',
            textTransform: 'none'
          }}
        >
          Training the mental side of youth sports, thoughtfully.
        </motion.h1>

        {/* Subtitle in Inter - smaller */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-muted-foreground max-w-2xl leading-relaxed font-inter"
          style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1rem)' }}
        >
          Helping young athletes build confidence, focus, and resilience & ensuring Coaches and Parents make the right decisions.
        </motion.p>

        {/* Buttons row: Log In + Join the Waitlist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="mt-1 flex items-center gap-4"
        >
          <a
            href="#"
            className="font-ibm-plex-mono text-[0.7rem] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Log In
          </a>
          <a href="/#contact" className="stroke-button !border-[1px]">
            <span className="stroke-button-inner !py-2 !px-4 !text-[0.65rem]">
              Join the Waitlist
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* Typewriter Chatbox */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="mt-4 w-full flex justify-center"
        >
          <TypewriterChatbox />
        </motion.div>
      </div>
    </section>
  )
}
