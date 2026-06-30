'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import TargetAudience from '@/components/TargetAudience'
import WhyDifferent from '@/components/WhyDifferent'
import Mockup from '@/components/Mockup'
import Testimonial from '@/components/Testimonial'
import FAQ from '@/components/FAQ'
import WaitlistForm from '@/components/WaitlistForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Hero />
        <Problem />
        <HowItWorks />
        <Benefits />
        <TargetAudience />
        <WhyDifferent />
        <Mockup />
        <Testimonial />
        <FAQ />
        <WaitlistForm />
        <Footer />
      </motion.div>
    </main>
  )
}