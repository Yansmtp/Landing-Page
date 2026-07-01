'use client'

import { motion } from 'framer-motion'
import { Brain, FileText, Target as TargetIcon } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const steps = [
  {
    icon: Brain,
    number: '01',
    title: 'Diagnóstico',
    description: 'Conectas tu perfil (LinkedIn/CV). Nuestra IA escanea tu experiencia y habilidades en segundos.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Optimización',
    description: 'No solo corrige tu CV. Reescribe tu narrativa profesional para destacar en el mercado estadounidense.',
  },
  {
    icon: TargetIcon,
    number: '03',
    title: 'Estrategia',
    description: 'Te indica dónde tienes más probabilidades de ser contratado y qué habilidades necesitas destacar.',
  },
]

export default function HowItWorks() {
  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Proceso simple
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Estrategia en 3 pasos.
            <span className="block text-gradient mt-3">La IA hace el resto.</span>
          </h2>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            Sin complicaciones. Sin burocracia. Solo resultados.
          </p>
        </div>

        {/* Bento Grid Layout - mobile optimized */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bento-card hover-lift p-6 sm:p-8"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Step number with gradient - mobile optimized */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-4xl sm:text-6xl font-bold bg-gradient-to-br from-primary/20 to-purple-500/20 bg-clip-text text-transparent">
                {step.number}
              </div>
              
              <div className="relative z-10">
                {/* Icon with animated background - mobile optimized */}
                <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <step.icon className="w-7 h-7 sm:w-10 sm:h-10 text-primary relative z-10" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-gradient transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  {step.description}
                </p>

                {/* Arrow indicator - hidden on mobile */}
                <div className="mt-4 sm:mt-6 hidden sm:flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium mr-2">Más información</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full glass-card">
            <div className="flex -space-x-1.5 sm:-space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary to-purple-500 border-2 border-background" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium">+500 profesionales ya están en lista</span>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
