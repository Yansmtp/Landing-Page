'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function Testimonial() {
  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 gradient-mesh opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-6"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Experiencia de usuario
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Resultados que hablan
            <span className="block text-gradient mt-2">por sí solos</span>
          </h2>
        </div>

        {/* Main testimonial card - mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-6 sm:p-8 md:p-12 rounded-3xl glass-card hover-lift mb-6 sm:mb-8"
        >
          {/* Quote icon with gradient - mobile optimized */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center">
            <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/50" />
          </div>

          <div className="relative z-10">
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-6 sm:mb-8 text-foreground">
              "Pasé de enviar <span className="text-gradient font-semibold">50 CVs</span> a la semana a recibir 
              <span className="text-gradient font-semibold"> 3 llamadas</span> de reclutadores en 5 días. 
              La IA no encontró trabajo por mí, me enseñó a vender mi perfil como un producto premium."
            </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                      CM
                    </div>
                    <div className="absolute -bottom-0.5 sm:-bottom-1 -right-0.5 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 sm:border-4 border-background" />
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-lg">Carlos M.</p>
                    <p className="text-muted text-sm sm:text-base">Ingeniero de Software</p>
                    <p className="text-xs sm:text-sm text-primary">Latinoamérica → EE.UU. ✅</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex flex-col items-start sm:items-end gap-1 sm:gap-2">
                  <div className="flex gap-0.5 sm:gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-muted">Verificado • Hace 2 semanas</p>
                </div>
              </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-2xl" />
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-primary/10 rounded-full blur-2xl" />
        </motion.div>

        {/* Additional social proof cards - mobile optimized */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              metric: '3x',
              label: 'Más entrevistas',
              description: 'En promedio en la primera semana'
            },
            {
              metric: '85%',
              label: 'Mejora en perfil',
              description: 'Puntuación de optimización ATS'
            },
            {
              metric: '2 semanas',
              label: 'Tiempo promedio',
              description: 'Para conseguir primera entrevista'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bento-card text-center p-6 sm:p-8"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1 sm:mb-2">
                {stat.metric}
              </div>
              <div className="font-semibold text-sm sm:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm text-muted">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
