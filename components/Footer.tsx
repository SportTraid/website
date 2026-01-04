'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <footer ref={ref} className="relative w-full" style={{ minHeight: 0, height: 0, margin: 0, padding: 0 }}>
    </footer>
  )
}

