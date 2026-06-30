'use client'

import { motion } from 'framer-motion'
import { BarChart, Award, TrendingUp, Target } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function Mockup() {
  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Así se ve una estrategia clara.
          </h2>
          <p className="text-muted text-lg">
            Un dashboard donde ves tu "Empleabilidad Score" y los pasos concretos para mejorarlo.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Mockup Dashboard */}
          <div className="bg-card border border-card-border rounded-2xl p-6 shadow-2xl">
            {/* Header del dashboard */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-muted">Dashboard • Perfil</span>
            </div>

            {/* Contenido del dashboard */}
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {/* Score principal */}
              <div className="md:col-span-2 bg-primary/5 rounded-xl p-6 border border-primary/10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted">Empleabilidad Score</p>
                    <p className="text-4xl font-bold text-gradient mt-1">87/100</p>
                    <p className="text-sm text-green-400 mt-1">↑ 23% vs. mes pasado</p>
                  </div>
                  <Award className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Stats rápidos */}
              <div className="bg-card/50 rounded-xl p-4 border border-card-border">
                <div className="flex items-center gap-2 text-muted mb-1">
                  <Target className="w-4 h-4" />
                  <span className="text-sm">Coincidencia</span>
                </div>
                <p className="text-2xl font-bold">94%</p>
                <p className="text-xs text-muted">con roles objetivo</p>
              </div>

              <div className="bg-card/50 rounded-xl p-4 border border-card-border">
                <div className="flex items-center gap-2 text-muted mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">Progreso</span>
                </div>
                <p className="text-2xl font-bold">6/8</p>
                <p className="text-xs text-muted">pasos completados</p>
              </div>
            </div>

            {/* Gráfico simulado */}
            <div className="bg-card/50 rounded-xl p-4 border border-card-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Habilidades vs. Mercado</span>
                <BarChart className="w-4 h-4 text-muted" />
              </div>
              <div className="flex items-end gap-3 h-24">
                {[
                  { label: 'Tech', value: 90 },
                  { label: 'Liderazgo', value: 75 },
                  { label: 'Comunicación', value: 95 },
                  { label: 'Estrategia', value: 80 },
                  { label: 'IA', value: 70 },
                ].map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${item.value}%` }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-full bg-gradient-to-t from-primary to-purple-500 rounded-t"
                      style={{ height: `${item.value}%` }}
                    />
                    <span className="text-xs text-muted">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Badge de "Recomendación IA" */}
            <div className="mt-4 flex items-center gap-2 text-sm text-muted bg-card/30 rounded-lg px-3 py-2 border border-card-border">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>IA activa: 3 recomendaciones estratégicas disponibles</span>
            </div>
          </div>

          {/* Efecto de brillo */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-3xl blur-3xl -z-10" />
        </motion.div>
      </div>
    </AnimatedSection>
  )
}