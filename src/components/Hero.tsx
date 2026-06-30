'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function Hero() {
  const isBrowser = typeof window !== 'undefined'
  const particleCount = 20

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5 -z-10" />
      
      {/* Partículas animadas (efecto visual) */}
      <div className="absolute inset-0 -z-10 opacity-30">
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{
              x: isBrowser ? Math.random() * window.innerWidth : 100 + i * 20,
              y: isBrowser ? Math.random() * window.innerHeight : 100 + i * 15,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              y: [null, -30, 30, -30],
              x: [null, 20, -20, 20],
              opacity: [null, 0.8, 0.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>Acceso anticipado • Limitado</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-5xl"
          >
            El mercado laboral ya no se conquista con CVs.
            <span className="block text-gradient mt-2">
              Se conquista con estrategia.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed"
          >
            El 98% de los CVs son ignorados por los ATS. No necesitas enviar más. 
            Necesitas una IA que te diga exactamente qué cambiar y dónde postularte.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <a
              href="#waitlist"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
            >
              <span>Únete al Acceso Anticipado</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-muted/60"
          >
            Sin spam. Sin costes. Solo la oportunidad de ser de los primeros.
          </motion.p>
        </div>
      </div>
    </section>
  )
}