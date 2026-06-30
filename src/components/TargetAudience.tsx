'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const audience = [
  'Eres un profesional (3+ años) buscando dar el salto a EE.UU.',
  'Estás cansado de ser un "talento invisible".',
  'Hablas inglés (o estás mejorándolo) y quieres competir globalmente.',
  'Crees que el método tradicional de buscar trabajo está obsoleto.',
]

export default function TargetAudience() {
  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Estás listo para dar el salto?
          </h2>
          <p className="text-muted text-lg">
            Esto es para ti si...
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {audience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 p-4 rounded-xl bg-card border border-card-border hover:border-primary/20 transition-colors"
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}