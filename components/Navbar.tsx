'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="fixed z-50 pointer-events-none" style={{ top: '3vh', left: '3vw', right: '3vw' }}>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="pointer-events-auto bg-foreground/[0.07] backdrop-blur-xl rounded-[5px] px-5 py-3"
      >
        <div className="flex items-center justify-between w-full">
          {/* Left: Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center cursor-pointer flex-shrink-0"
          >
            <Image
              src="/assets/combination mark.svg"
              alt="SportTriad Logo"
              width={140}
              height={40}
              className="h-6 w-auto flex-shrink-0"
              style={{ objectFit: 'contain' }}
            />
          </motion.a>

          {/* Right: Links + Log In + Join Waitlist */}
          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center gap-5 font-ibm-plex-mono text-[0.65rem] tracking-[0.08em] uppercase">
              <motion.a
                href="http://13.222.189.44:3000/login"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Triad
              </motion.a>
              <motion.a
                href="/about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                About
              </motion.a>
              <motion.a
                href="/#features"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Features
              </motion.a>
              <motion.a
                href="/#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Contact
              </motion.a>
            </div>

            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="font-ibm-plex-mono text-[0.65rem] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Log In
            </motion.a>

            <motion.a
              href="/#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="stroke-button !border-[1px]"
            >
              <span className="stroke-button-inner !py-1.5 !px-3.5 !text-[0.6rem]">
                Join Waitlist
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.a>
          </div>
        </div>
      </motion.nav>
    </div>
  )
}
