'use client'

import { motion } from 'framer-motion'
import { X, Check, Sparkles } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function WhyDifferent() {
  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            No es un portal de empleo.
          </h2>
          <p className="text-muted text-lg">
            La diferencia está en el enfoque.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Portales tradicionales */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-card-border"
          >
            <div className="flex items-center gap-2 mb-4">
              <X className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-semibold text-muted">Portales tradicionales</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted">
                <X className="w-4 h-4 text-red-500/50" />
                <span>Muestran ofertas (tú aplicas y rezas)</span>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <X className="w-4 h-4 text-red-500/50" />
                <span>No analizan tu perfil</span>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <X className="w-4 h-4 text-red-500/50" />
                <span>Competencia masiva</span>
              </li>
            </ul>
          </motion.div>

          {/* Nuestra plataforma */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="flex items-center gap-2 mb-4 relative">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-primary">Nuestra plataforma</h3>
            </div>
            <ul className="space-y-3 relative">
              <li className="flex items-center gap-3 text-foreground">
                <Check className="w-4 h-4 text-primary" />
                <span>Analiza tu perfil, lo pule, y te dice dónde encajas</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <Check className="w-4 h-4 text-primary" />
                <span>Estrategia personalizada con IA</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <Check className="w-4 h-4 text-primary" />
                <span>Llegas preparado a las entrevistas</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-gradient">
            No te ayudamos a buscar trabajo.
            <br />
            <span className="text-3xl">Te ayudamos a conseguir entrevistas.</span>
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}