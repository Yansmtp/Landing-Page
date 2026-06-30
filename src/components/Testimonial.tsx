'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function Testimonial() {
  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-sm font-medium text-muted bg-card border border-card-border px-4 py-2 rounded-full">
            ⚡ Experiencia esperada
          </span>
          <h2 className="text-2xl font-semibold mt-4">
            Basado en la experiencia de nuestros usuarios piloto
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 rounded-3xl bg-card border border-card-border"
        >
          <Quote className="w-10 h-10 text-primary/30 absolute top-6 left-6" />
          
          <div className="pl-4 md:pl-12">
            <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-6">
              "Pasé de enviar 50 CVs a la semana a recibir 3 llamadas de reclutadores en 5 días. 
              La IA no encontró trabajo por mí, me enseñó a vender mi perfil como un producto premium."
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold">
                CM
              </div>
              <div>
                <p className="font-semibold">Carlos M.</p>
                <p className="text-sm text-muted">Ingeniero de Software • Latinoamérica → EE.UU.</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </AnimatedSection>
  )
}