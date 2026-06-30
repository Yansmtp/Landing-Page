'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Fondo moderno con patrón de puntos y resplandor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/10 via-background to-background" 
          style={{ backgroundSize: '100% 100%' }} 
        />
        <div 
          className="absolute inset-0 bg-[radial-gradient(white,transparent_1px)]"
          style={{
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse_at_center,black,transparent_70%)',
            opacity: 0.1
          }}
        />
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
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_0_0_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_0_rgba(139,92,246,0.5)]"
            >
              <span className="relative z-10">Únete al Acceso Anticipado</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
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