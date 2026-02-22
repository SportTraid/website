'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <footer ref={ref} className="relative w-full py-12 flex justify-center items-center">
      <motion.a
        href="/"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center"
      >
        <Image
          src="/assets/word mark.svg"
          alt="SportTriad"
          width={160}
          height={40}
          className="h-6 w-auto"
          style={{ objectFit: 'contain' }}
        />
      </motion.a>
    </footer>
  )
}

