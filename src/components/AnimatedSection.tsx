'use client'

import { motion } from 'framer-motion'
import type { ReactNode, ForwardedRef } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
}

const AnimatedSection = ({ children, className = '', delay = 0, id }: AnimatedSectionProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
