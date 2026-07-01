'use client'

import { motion } from 'framer-motion'
import { Brain, FileText, Target as TargetIcon, CheckCircle2 } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useState, useEffect, useRef } from 'react'

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
  const sectionRef = useRef<HTMLDivElement>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Reset accordion when section is completely out of viewport
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only reset when section is completely out of view (not intersecting at all)
          if (!entry.isIntersecting && openIndex !== null) {
            setOpenIndex(null)
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '-100% 0px -100% 0px', // Only trigger when completely out of viewport
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [openIndex])

  // Auto collapse on scroll - only when section is completely out of view
  useEffect(() => {
    if (openIndex === null) return

    let scrollTimeout: NodeJS.Timeout
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up'
          const scrollDistance = Math.abs(currentScrollY - lastScrollY)
          
          lastScrollY = currentScrollY
          
          // Only trigger if scrolled more than 100px and section is not visible
          if (scrollDistance > 100) {
            const section = sectionRef.current
            if (!section) return

            const rect = section.getBoundingClientRect()
            const windowHeight = window.innerHeight
            
            // Check if section is completely out of viewport
            const isCompletelyOut = rect.bottom < 0 || rect.top > windowHeight
            
            if (isCompletelyOut && openIndex !== null) {
              scrollTimeout = setTimeout(() => {
                setOpenIndex(null)
              }, 150)
            }
          }
          
          ticking = false
        })
        
        ticking = true
      }
    }

    // Add scroll listener with passive option for performance
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [openIndex])

  // Calculate which step goes in which position
  // When a step is expanded, it goes first (top), others maintain chronological order
  const getStepOrder = () => {
    if (openIndex === null) {
      return [0, 1, 2] // Original order
    }
    
    // Expanded step goes first, then the others in chronological order
    const others = [0, 1, 2].filter(i => i !== openIndex)
    return [openIndex, ...others]
  }

  const stepOrder = getStepOrder()

  return (
    <AnimatedSection ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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

        {/* Dynamic Grid Layout */}
        <div className="max-w-6xl mx-auto">
          <div className={openIndex !== null ? "grid md:grid-cols-2 gap-4" : "grid md:grid-cols-3 gap-4 sm:gap-6"}>
            {stepOrder.map((stepIndex, position) => {
              const step = steps[stepIndex]
              const isExpanded = openIndex === stepIndex
              
              return (
                <motion.div
                  key={stepIndex}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: isExpanded ? 1 : 1,
                  }}
                  transition={{ 
                    layout: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 }
                  }}
                  onClick={() => toggleAccordion(stepIndex)}
                  className={`relative cursor-pointer group ${
                    isExpanded ? 'md:col-span-2' : ''
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleAccordion(stepIndex)
                    }
                  }}
                >
                  <div className={`relative bento-card transition-all duration-500 ${
                    isExpanded 
                      ? 'p-4 sm:p-6 lg:p-8' 
                      : 'p-6 sm:p-8'
                  }`}>
                    {/* Gradient glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                    
                    {/* Step number with gradient */}
                    <div className={`font-bold bg-gradient-to-br from-primary/20 to-purple-500/20 bg-clip-text text-transparent ${
                      isExpanded 
                        ? 'absolute top-4 right-4 sm:top-6 sm:right-6 text-5xl sm:text-7xl' 
                        : 'absolute top-3 right-3 sm:top-4 sm:right-4 text-3xl sm:text-4xl'
                    }`}>
                      {step.number}
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 sm:gap-6">
                        {/* Icon with animated background */}
                        <div className={`rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 ${
                          isExpanded ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-14 h-14 sm:w-20 sm:h-20'
                        }`}>
                          <div className={`bg-primary/10 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 ${
                            isExpanded ? 'absolute inset-0' : 'absolute inset-0'
                          }`} />
                          {(() => {
                            const Icon = step.icon
                            return <Icon className={`text-primary relative z-10 ${
                              isExpanded ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-7 h-7 sm:w-10 sm:h-10'
                            }`} />
                          })()}
                        </div>
                        
                        <div className="flex-1 min-w-0 pr-6 sm:pr-8">
                          {isExpanded ? (
                            /* Expanded Content - Mejorado con más espacio */
                            <div className="space-y-3 sm:space-y-4">
                              <div>
                                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gradient">
                                  {step.fullTitle}
                                </h3>
                                <p className="text-muted leading-relaxed text-sm sm:text-base">
                                  {step.fullDescription}
                                </p>
                              </div>

                              {/* Features List - Mejorado */}
                              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                                {step.includes.map((item, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-2 p-2 sm:p-2.5 rounded-lg bg-card/50 border border-card-border/30"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-xs sm:text-sm text-foreground/90">{item}</span>
                                  </motion.div>
                                ))}
                              </div>

                              {/* Result Box - Mejorado */}
                              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 p-3 sm:p-4 border border-primary/20">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                                <div className="relative z-10">
                                  <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                                      Resultado
                                    </span>
                                  </div>
                                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                                    {step.result}
                                  </p>
                                </div>
                              </div>

                              {/* CTA Button */}
                              <motion.a
                                href={step.buttonLink}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary/30 text-sm"
                              >
                                <span>{step.buttonText}</span>
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </motion.a>
                            </div>
                          ) : (
                            /* Collapsed Content */
                            <>
                              <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                                {step.title}
                              </h3>
                              <p className="text-muted leading-relaxed text-sm sm:text-base line-clamp-2">
                                {step.shortDescription}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
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