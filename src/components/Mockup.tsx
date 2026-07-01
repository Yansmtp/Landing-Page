'use client'

import { motion } from 'framer-motion'
import { BarChart, Award, TrendingUp, Target } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function Mockup() {
  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 gradient-mesh opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-6"
          >
            <BarChart className="w-4 h-4" />
            Dashboard inteligente
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Así se ve una
            <span className="block text-gradient mt-2">estrategia clara.</span>
          </h2>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            Un dashboard donde ves tu <span className="text-foreground font-semibold">"Empleabilidad Score"</span> y los pasos concretos para mejorarlo.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Mockup Dashboard with glass effect */}
          <div className="relative bg-card/80 backdrop-blur-xl border border-card-border/50 rounded-3xl p-8 shadow-2xl">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/10 opacity-50" />
            
            {/* Header del dashboard */}
            <div className="relative z-10 flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-glow-pink" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-glow" />
              </div>
              <span className="text-sm text-muted font-medium">Dashboard • Perfil</span>
            </div>

            {/* Contenido del dashboard - Bento Grid */}
            <div className="relative z-10 grid md:grid-cols-4 gap-4 mb-6">
              {/* Score principal - spans 2 columns */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="md:col-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted font-medium">Empleabilidad Score</p>
                    <p className="text-5xl font-bold text-gradient mt-2">87/100</p>
                    <div className="flex items-center gap-2 mt-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <p className="text-sm text-green-400 font-medium">↑ 23% vs. mes pasado</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Award className="w-10 h-10 text-primary" />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                  </div>
                </div>
              </motion.div>

              {/* Stats rápidos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl bg-card/50 p-5 border border-card-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-muted mb-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Coincidencia</span>
                </div>
                <p className="text-3xl font-bold text-gradient">94%</p>
                <p className="text-xs text-muted mt-1">con roles objetivo</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl bg-card/50 p-5 border border-card-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-muted mb-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Progreso</span>
                </div>
                <p className="text-3xl font-bold text-gradient">6/8</p>
                <p className="text-xs text-muted mt-1">pasos completados</p>
              </motion.div>
            </div>

            {/* Gráfico simulado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-2xl bg-card/50 p-6 border border-card-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold">Habilidades vs. Mercado</span>
                <BarChart className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-end gap-4 h-32">
                {[
                  { label: 'Tech', value: 90, color: 'from-primary to-purple-500' },
                  { label: 'Liderazgo', value: 75, color: 'from-purple-500 to-pink-500' },
                  { label: 'Comunicación', value: 95, color: 'from-pink-500 to-primary' },
                  { label: 'Estrategia', value: 80, color: 'from-primary to-blue-500' },
                  { label: 'IA', value: 70, color: 'from-blue-500 to-purple-500' },
                ].map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-3">
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: `${item.value}%`, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="w-full bg-gradient-to-t from-primary to-purple-500 rounded-t-lg relative group/bar"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent rounded-t-lg opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                        {item.value}%
                      </div>
                    </motion.div>
                    <span className="text-xs text-muted font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Badge de "Recomendación IA" */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 mt-4 flex items-center gap-3 text-sm text-muted bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl px-4 py-3 border border-primary/20"
            >
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping" />
              </div>
              <span className="font-medium">IA activa: <span className="text-foreground">3 recomendaciones estratégicas</span> disponibles</span>
            </motion.div>
          </div>

          {/* Enhanced glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl -z-10" />
          <div className="absolute -inset-8 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-[3rem] blur-2xl -z-20" />
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
