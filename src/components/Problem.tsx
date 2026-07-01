'use client'

import { motion } from 'framer-motion'
import { Target, TrendingDown, Globe } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const problems = [
  {
    icon: Target,
    title: 'Aplicas a cientos de ofertas... y solo recibes silencio.',
    description: 'El problema no eres tú. Es que estás compitiendo contra algoritmos sin usar algoritmos a tu favor.',
  },
  {
    icon: TrendingDown,
    title: 'Estás sobrecalificado para lo que haces.',
    description: 'Tienes un talento que el mercado necesita, pero tu perfil online no lo está comunicando para los roles correctos.',
  },
  {
    icon: Globe,
    title: 'El mercado de EE.UU. es un rompecabezas.',
    description: 'No entiendes qué busca realmente un reclutador americano en tu perfil o cómo adaptar tu storytelling profesional.',
  },
]

export default function Problem() {
  return (
    <AnimatedSection className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced background with gradient mesh */}
      <div className="absolute inset-0 -z-10 gradient-mesh opacity-50" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-red-500 text-sm font-medium mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Problemas comunes
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            ¿Te suena familiar?
          </h2>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            Esto es lo que escuchamos todos los días de profesionales como tú.
          </p>
        </div>

        {/* Bento Grid with asymmetric layout - mobile optimized */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bento-card hover-lift p-6 sm:p-8"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10">
                {/* Icon with enhanced styling - mobile optimized */}
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className="absolute inset-0 bg-red-500/10 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <problem.icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 relative z-10" />
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 group-hover:text-gradient transition-all duration-300">
                  {problem.title}
                </h3>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  {problem.description}
                </p>

                {/* Visual indicator - hidden on mobile */}
                <div className="mt-4 sm:mt-6 hidden sm:flex items-center text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-sm font-medium">Ver solución</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section - mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {[
            { value: '98%', label: 'CVs ignorados' },
            { value: '250+', label: 'Aplicaciones promedio' },
            { value: '3%', label: 'Tasa de respuesta' },
            { value: '6 meses', label: 'Búsqueda promedio' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
