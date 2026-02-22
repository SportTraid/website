'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function SportTriad() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative w-full"
      style={{ marginBottom: 0, paddingBottom: 0, marginTop: 0, paddingTop: 0, lineHeight: 0 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full flex justify-center items-end"
        style={{ marginBottom: 0, paddingBottom: 0, marginTop: 0, paddingTop: 0, lineHeight: 0 }}
      >
        <div className="relative w-[90%] max-w-5xl" style={{ marginBottom: 0, paddingBottom: 0, lineHeight: 0 }}>
          <div className="relative w-full" style={{ marginBottom: 0, paddingBottom: 0, lineHeight: 0 }}>
            <Image
              src="/assets/word mark.svg"
              alt="SportTriad"
              width={1200}
              height={600}
              className="w-full h-auto object-contain object-bottom"
              priority
              sizes="90vw"
              style={{ marginBottom: 0, paddingBottom: 0, display: 'block', verticalAlign: 'bottom', lineHeight: 0 }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
