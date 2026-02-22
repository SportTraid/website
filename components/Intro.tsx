'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useMemo } from 'react'

const texts = [
  'Train the brain and the body will reach its potential.',
  'Triad exists to help young athletes chase their dreams in life.',
]

function Word({
  word,
  globalIndex,
  totalWords,
  scrollYProgress,
}: {
  word: string
  globalIndex: number
  totalWords: number
  scrollYProgress: any
}) {
  const startReveal = (globalIndex / totalWords) * 0.7
  const midReveal = ((globalIndex + 0.5) / totalWords) * 0.7
  const endReveal = ((globalIndex + 1) / totalWords) * 0.7

  const opacity = useTransform(
    scrollYProgress,
    [startReveal, midReveal, endReveal],
    [0.25, 0.75, 1]
  )

  return (
    <motion.span
      style={{
        opacity,
        transition: 'opacity 0.15s ease-out',
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        letterSpacing: 'inherit',
        lineHeight: 'inherit',
      }}
      className="inline"
    >
      {word}
    </motion.span>
  )
}

export default function Intro() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.15'],
  })

  const wordData = useMemo(() => {
    let globalIndex = 0
    return texts.map((text) => {
      const words = text.split(' ')
      return words.map((word, wordIndex) => ({
        word,
        hasSpace: wordIndex < words.length - 1,
        globalIndex: globalIndex++,
      }))
    })
  }, [])

  const totalWords = wordData.flat().length

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-20"
    >
      <div className="w-full flex items-center justify-center">
        <div className="text-center" style={{ maxWidth: '75vw' }}>
          <div className="space-y-8">
            {wordData.map((words, textIndex) => (
              <h1
                key={textIndex}
                className="font-syne !font-normal text-foreground leading-[1.1] !normal-case"
                style={{ 
                  fontFamily: 'var(--font-syne), sans-serif',
                  fontSize: 'clamp(1.5rem, 6vw, 4.875rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  maxWidth: '75vw',
                  width: '75vw',
                  textTransform: 'none'
                }}
              >
                {words.map((item, wordIndex) => (
                  <span key={wordIndex} style={{ fontFamily: 'inherit', fontWeight: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit', lineHeight: 'inherit' }}>
                    <Word
                      word={item.word}
                      globalIndex={item.globalIndex}
                      totalWords={totalWords}
                      scrollYProgress={scrollYProgress}
                    />
                    {item.hasSpace && ' '}
                  </span>
                ))}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
