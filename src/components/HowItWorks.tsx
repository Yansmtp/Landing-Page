'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Brain, FileText, Target as TargetIcon, ChevronDown, CheckCircle2 } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useState } from 'react'

const steps = [
  {
    icon: Brain,
    number: '01',
    title: 'Diagnóstico',
    shortDescription: 'Conectas tu perfil (LinkedIn/CV). Nuestra IA escanea tu experiencia y habilidades en segundos.',
    fullTitle: 'Descubre qué está limitando tus oportunidades.',
    fullDescription: 'Nuestro sistema analiza tu perfil profesional utilizando Inteligencia Artificial para identificar los factores que podrían estar reduciendo tus posibilidades de conseguir entrevistas.',
    includes: [
      '📄 Evaluación del CV',
      '💼 Análisis del perfil de LinkedIn',
      '🎯 Compatibilidad con ofertas laborales',
      '🔑 Optimización para sistemas ATS',
      '🌍 Idioma y presentación profesional',
      '⭐ Fortalezas y oportunidades de mejora',
    ],
    result: 'Obtendrás un informe claro con prioridades y recomendaciones para aumentar tus probabilidades de éxito.',
    buttonText: 'Únete al acceso anticipado',
    buttonLink: '#waitlist',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Optimización',
    shortDescription: 'No solo corrige tu CV. Reescribe tu narrativa profesional para destacar en el mercado estadounidense.',
    fullTitle: 'Convierte tu perfil en una herramienta que destaque.',
    fullDescription: 'Después del diagnóstico, la plataforma genera recomendaciones inteligentes para fortalecer cada aspecto de tu perfil profesional.',
    includes: [
      '✍️ Optimización del CV',
      '💼 Mejora del perfil de LinkedIn',
      '📝 Cartas de presentación',
      '🔑 Optimización ATS',
      '📈 Recomendaciones de mejora',
      '🤖 Sugerencias generadas por IA',
    ],
    result: 'Un perfil profesional moderno, competitivo y preparado para captar la atención de los reclutadores.',
    buttonText: 'Únete al acceso anticipado',
    buttonLink: '#waitlist',
  },
  {
    icon: TargetIcon,
    number: '03',
    title: 'Estrategia',
    shortDescription: 'Te indica dónde tienes más probabilidades de ser contratado y qué habilidades necesitas destacar.',
    fullTitle: 'Buscar empleo no debería depender de la suerte.',
    fullDescription: 'La plataforma crea una estrategia personalizada para ayudarte a enfocar tus esfuerzos donde realmente tienes mayores probabilidades de conseguir resultados.',
    includes: [
      '🏢 Empresas recomendadas',
      '📍 Mercados con mayor oportunidad',
      '📅 Plan semanal de aplicaciones',
      '📬 Seguimiento de postulaciones',
      '🤝 Estrategias de networking',
      '🎤 Preparación para entrevistas',
    ],
    result: 'Un plan organizado para transformar una búsqueda desordenada en una estrategia profesional basada en datos.',
    buttonText: 'Únete al acceso anticipado',
    buttonLink: '#waitlist',
  },
]

export default function HowItWorks() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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

        {/* Accordion Layout */}
        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step, index) => {
            const isOpen = openIndex === index
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Card Header - Always Visible */}
                <motion.div
                  onClick={() => toggleAccordion(index)}
                  className="relative bento-card p-6 sm:p-8 cursor-pointer group"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-content-${index}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleAccordion(index)
                    }
                  }}
                >
                  {/* Gradient glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  {/* Step number with gradient */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-4xl sm:text-6xl font-bold bg-gradient-to-br from-primary/20 to-purple-500/20 bg-clip-text text-transparent">
                    {step.number}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Icon with animated background */}
                      <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                        <step.icon className="w-7 h-7 sm:w-10 sm:h-10 text-primary relative z-10" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                          {step.title}
                        </h3>
                        <p className="text-muted leading-relaxed text-base sm:text-lg">
                          {step.shortDescription}
                        </p>
                      </div>

                      {/* Expand/Collapse Icon */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center"
                      >
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`accordion-content-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-card-border/50 rounded-b-3xl p-6 sm:p-8 -mt-4 pt-6 sm:pt-8">
                        {/* Content */}
                        <div className="relative z-10 space-y-6">
                          {/* Title and Description */}
                          <div>
                            <h4 className="text-xl sm:text-2xl font-bold mb-3 text-gradient">
                              {step.fullTitle}
                            </h4>
                            <p className="text-muted leading-relaxed text-base sm:text-lg">
                              {step.fullDescription}
                            </p>
                          </div>

                          {/* Features List */}
                          <div className="grid sm:grid-cols-2 gap-3">
                            {step.includes.map((item, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-2.5"
                              >
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm sm:text-base text-foreground/90">{item}</span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Result Box */}
                          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 p-5 sm:p-6 border border-primary/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                            <div className="relative z-10">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide">
                                  Resultado
                                </span>
                              </div>
                              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                                {step.result}
                              </p>
                            </div>
                          </div>

                          {/* CTA Button */}
                          <motion.a
                            href={step.buttonLink}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 flex items-center justify-center gap-2 group/btn"
                          >
                            <span className="text-sm sm:text-base">{step.buttonText}</span>
                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
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