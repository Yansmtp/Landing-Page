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
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Estrategia en 3 pasos.
            <span className="block text-gradient mt-2">La IA hace el resto.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Sin complicaciones. Sin burocracia. Solo resultados.
          </p>
        </div>

        <div className="relative -z-0">
          {/* Línea conectora horizontal (detrás de las tarjetas) */}
          <div className="absolute top-8 left-16 right-16 h-16 flex items-center justify-center -z-10 md:block hidden">
            <svg width="100%" height="2">
              <line x1="0" y1="1" x2="100%" y2="1" strokeDasharray="8 8" className="stroke-primary/30" strokeWidth="2" />
            </svg>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl bg-card border border-card-border transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="flex flex-col items-center text-center relative">
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center mb-6 relative z-10">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted leading-relaxed max-w-xs">{step.description}</p>
                  <span className="absolute -top-3 text-6xl font-bold text-card-border/20 -z-0">
                    {step.number}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}