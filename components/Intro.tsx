'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useMemo } from 'react'

const texts = [
  'Train the brain and the body will reach its potential.',
  'Triad exists to help young athletes chase their dreams in life.'
]

function Word({ word, globalIndex, totalWords, scrollYProgress, textIndex }: { word: string, globalIndex: number, totalWords: number, scrollYProgress: any, textIndex: number }) {
  // Last line (textIndex === 1) should have full opacity, others should have reduced opacity
  const maxOpacity = textIndex === 1 ? 1 : 0.6
  
  const opacity = useTransform(
    scrollYProgress,
    [
      (globalIndex / totalWords) * 0.65,
      ((globalIndex + 0.5) / totalWords) * 0.65,
      ((globalIndex + 1) / totalWords) * 0.65
    ],
    [0, maxOpacity, maxOpacity]
  )
  
  return (
    <motion.span
      style={{ opacity }}
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
    offset: ['start 0.8', 'end 0.2']
  })

  const wordData = useMemo(() => {
    let globalIndex = 0
    return texts.map((text) => {
      const words = text.split(' ')
      const wordItems = words.map((word, wordIndex) => {
        const item = {
          word: word,
          hasSpace: wordIndex < words.length - 1,
          globalIndex: globalIndex++
        }
        return item
      })
      return wordItems
    })
  }, [])

  const totalWords = wordData.flat().length

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-20 pb-0" style={{ marginBottom: 0, paddingBottom: 0 }}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            {wordData.map((words, textIndex) => {
              const isFirstLine = textIndex === 0
              const isSecondLine = textIndex === 1
              
              return (
                <div 
                  key={textIndex} 
                  className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight ${
                    isFirstLine ? 'text-white' : 
                    isSecondLine ? 'gradient-text font-semibold' : 
                    'text-gray-300'
                  }`}
                >
                  {words.map((item, wordIndex) => (
                    <span key={wordIndex}>
                      <Word
                        word={item.word}
                        globalIndex={item.globalIndex}
                        totalWords={totalWords}
                        scrollYProgress={scrollYProgress}
                        textIndex={textIndex}
                      />
                      {item.hasSpace && ' '}
                    </span>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

