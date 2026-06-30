'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, Shield, Users } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const benefits = [
  {
    icon: TrendingUp,
    stat: '86%',
    label: 'aumento en solicitudes de entrevistas',
    description: 'de nuestros usuarios piloto reportaron mejoras en las primeras 2 semanas.',
    highlight: true,
  },
  {
    icon: Clock,
    stat: '10x',
    label: 'menos tiempo aplicando',
    description: 'Más tiempo preparándote para las entrevistas correctas.',
  },
  {
    icon: Shield,
    stat: 'Anti-ATS',
    label: 'estrategia optimizada',
    description: 'Optimizamos tu perfil para que pase los filtros automatizados.',
  },
  {
    icon: Users,
    stat: 'Networking',
    label: 'inteligente',
    description: 'Te decimos a quién contactar dentro de las empresas para saltarte el filtro.',
  },
]

export default function Benefits() {
  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            No es un buscador de empleo.
            <span className="block text-gradient mt-2">Es un potenciador de oportunidades.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                benefit.highlight
                  ? 'bg-primary/5 border-primary/20 hover:shadow-primary/10'
                  : 'bg-card border-card-border hover:border-muted/30'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${
                  benefit.highlight ? 'bg-primary/10' : 'bg-muted/10'
                }`}>
                  <benefit.icon className={`w-5 h-5 ${
                    benefit.highlight ? 'text-primary' : 'text-muted'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className={`text-3xl font-bold mb-1 ${
                    benefit.highlight ? 'text-gradient' : ''
                  }`}>
                    {benefit.stat}
                  </div>
                  <div className="font-semibold text-sm mb-1">{benefit.label}</div>
                  <p className="text-sm text-muted leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}