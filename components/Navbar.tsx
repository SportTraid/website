'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        className={`transition-all duration-300 pointer-events-auto ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border border-white/10'
            : 'bg-background/60 backdrop-blur-md border border-white/10'
        } rounded-full px-6 py-3 shadow-lg w-[90%] md:w-[80%] lg:w-[60%]`}
      >
        <div className="flex items-center justify-between gap-8 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center"
        >
          <Image
            src="/assets/T logomark.png"
            alt="Triad Logo"
            width={32}
            height={32}
            className="w-8 h-8 flex-shrink-0"
            style={{ objectFit: 'contain' }}
          />
        </motion.div>
        <div className="flex items-center gap-6">
          <motion.a
            href="#features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Features
          </motion.a>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </motion.a>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-gray-400"
          >
            Coming Soon
          </motion.div>
        </div>
        </div>
      </motion.nav>
    </div>
  )
}

