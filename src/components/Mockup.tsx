'use client'

import { motion } from 'framer-motion'
import { BarChart, Award, TrendingUp, Target } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function Mockup() {
  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects - mobile optimized */}
      <div className="absolute inset-0 -z-10 gradient-mesh opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] bg-primary/10 rounded-full blur-3xl" />

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
        {/* Mockup Dashboard with glass effect - mobile optimized */}
        <div className="relative bg-card/80 backdrop-blur-xl border border-card-border/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
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

            {/* Contenido del dashboard - Bento Grid - mobile optimized */}
            <div className="relative z-10 grid md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {/* Score principal - spans 2 columns */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="md:col-span-2 relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 p-4 sm:p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-muted font-medium">Empleabilidad Score</p>
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mt-1 sm:mt-2">87/100</p>
                    <div className="flex items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                      <p className="text-xs sm:text-sm text-green-400 font-medium">↑ 23% vs. mes pasado</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                  </div>
                </div>
              </motion.div>

              {/* Stats rápidos - mobile optimized */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-xl sm:rounded-2xl bg-card/50 p-4 sm:p-5 border border-card-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 text-muted mb-1.5 sm:mb-2">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-xs sm:text-sm font-medium">Coincidencia</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-gradient">94%</p>
                <p className="text-xs text-muted mt-1">con roles objetivo</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-xl sm:rounded-2xl bg-card/50 p-4 sm:p-5 border border-card-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 text-muted mb-1.5 sm:mb-2">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-xs sm:text-sm font-medium">Progreso</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-gradient">6/8</p>
                <p className="text-xs text-muted mt-1">pasos completados</p>
              </motion.div>
            </div>

            {/* Gráfico mejorado - más visual y comunicativo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-card/80 to-card/50 p-4 sm:p-6 border border-card-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div>
                  <span className="text-xs sm:text-sm font-semibold block">Habilidades vs. Mercado</span>
                  <span className="text-xs text-muted mt-1 block">Tu nivel competitivo por área</span>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                  <BarChart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
              </div>
              
              {/* Barras de habilidades mejoradas */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  { label: 'Tech', value: 90, icon: '💻', color: 'from-primary to-purple-500', bgColor: 'bg-primary/10' },
                  { label: 'Liderazgo', value: 75, icon: '🎯', color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10' },
                  { label: 'Comunicación', value: 95, icon: '💬', color: 'from-pink-500 to-primary', bgColor: 'bg-pink-500/10' },
                  { label: 'Estrategia', value: 80, icon: '🎨', color: 'from-blue-500 to-primary', bgColor: 'bg-blue-500/10' },
                  { label: 'IA', value: 70, icon: '🤖', color: 'from-primary to-blue-500', bgColor: 'bg-primary/10' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-1.5 sm:space-y-2"
                  >
                    {/* Label con icono y porcentaje */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-base sm:text-lg">{item.icon}</span>
                        <span className="text-xs sm:text-sm font-medium text-foreground">{item.label}</span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gradient">{item.value}%</span>
                    </div>
                    
                    {/* Barra de progreso mejorada */}
                    <div className="relative h-2 sm:h-2.5 rounded-full bg-card-border/50 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full bg-gradient-to-r ${item.color} relative`}
                      >
                        {/* Efecto de brillo */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </motion.div>
                    </div>
                    
                    {/* Indicador de nivel */}
                    <div className="flex items-center gap-1.5">
                      <div className={`flex-1 h-1 rounded-full ${item.bgColor}`} />
                      <span className="text-xs text-muted">
                        {item.value >= 90 ? 'Excelente' : item.value >= 80 ? 'Muy bueno' : item.value >= 70 ? 'Bueno' : 'En desarrollo'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Leyenda */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-card-border/50">
                <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs text-muted">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-primary to-purple-500" />
                    <span>Tu nivel</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-card-border" />
                    <span>Promedio mercado</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Badge de "Recomendación IA" - mobile optimized */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-primary/20"
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
