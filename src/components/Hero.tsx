'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 -z-10 gradient-mesh" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.1)_1px,transparent_1px)]"
        style={{
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse_at_center,black,transparent_70%)',
        }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge with glass effect */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>Acceso anticipado • Limitado</span>
          </motion.div>

          {/* Headline with enhanced typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-6xl"
          >
            <span className="block">El mercado laboral ya no</span>
            <span className="block text-gradient mt-3">se conquista con CVs.</span>
            <span className="block mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-muted font-semibold">
              Se conquista con estrategia.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-muted max-w-3xl leading-relaxed"
          >
            El <span className="text-foreground font-semibold">98% de los CVs</span> son ignorados por los ATS. 
            No necesitas enviar más. Necesitas una <span className="text-gradient font-semibold">IA</span> que te diga 
            exactamente qué cambiar y dónde postularte.
          </motion.p>

          {/* CTA with enhanced button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <a
              href="#waitlist"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_0_0_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_0_rgba(139,92,246,0.6)] magnetic-hover"
            >
              <span className="relative z-10 text-lg">Únete al Acceso Anticipado</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted/60"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>+500 en lista de espera</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9/5 satisfacción</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}