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

        <div className="relative">
          {/* Línea conectora */}
          <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-primary/20 hidden md:block" />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 relative">
                    <step.icon className="w-8 h-8 text-primary" />
                    <span className="absolute -top-2 -right-2 text-xs font-bold bg-background border border-card-border rounded-full w-6 h-6 flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted leading-relaxed max-w-xs">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}