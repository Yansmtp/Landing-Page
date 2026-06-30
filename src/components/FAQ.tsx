'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const faqs = [
  {
    question: '¿Tengo que pagar algo?',
    answer: 'No. Estamos en fase de validación. Buscamos profesionales ambiciosos que quieran probar la herramienta y darnos feedback a cambio de acceso gratuito prioritario.',
  },
  {
    question: '¿Solo funciona para Estados Unidos?',
    answer: 'Nuestro motor de IA está entrenado específicamente para el mercado laboral estadounidense y su cultura corporativa, aunque nuestros análisis aplican a mercados globales.',
  },
  {
    question: '¿Cuánto tiempo debo invertir?',
    answer: 'Conectas tus datos en 5 minutos. La IA trabaja por ti. Luego, solo necesitas dedicar tiempo a las recomendaciones estratégicas.',
  },
  {
    question: '¿Es seguro compartir mi CV/LinkedIn?',
    answer: 'Absolutamente. Tus datos están encriptados y no compartimos tu información con terceros. Únicamente la usamos para entrenar tu estrategia personalizada.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-muted">
            Resolvemos tus dudas antes de dar el paso.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-card-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-card/80 transition-colors text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}