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
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Te suena familiar?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Esto es lo que escuchamos todos los días de profesionales como tú.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-card-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}