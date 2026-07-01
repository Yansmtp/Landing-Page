'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Sparkles } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    country: '',
    status: '',
    difficulty: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const countries = [
    'Estados Unidos',
    'México',
    'Colombia',
    'Argentina',
    'Chile',
    'Perú',
    'España',
    'Reino Unido',
    'Canadá',
    'Otro',
  ]

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = '¿Cómo debemos llamarte?'
    if (!formData.email.trim()) {
      newErrors.email = 'Necesitamos tu correo para contactarte'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo electrónico inválido'
    }
    if (!formData.profession.trim()) newErrors.profession = 'Cuéntanos tu profesión'
    if (!formData.country) newErrors.country = 'Selecciona tu país'
    if (!formData.status) newErrors.status = 'Selecciona tu situación actual'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Ocurrió un error al registrar.')
      }

      setIsSuccess(true)
      // Resetear formulario después de éxito
      setFormData({ name: '', email: '', profession: '', country: '', status: '', difficulty: '' })
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido'
      setErrors({ form: errorMessage })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatedSection id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 -z-10 gradient-mesh" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 via-purple-500/5 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Acceso anticipado abierto
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Sé de los primeros en
            <span className="block text-gradient mt-2">transformar tu carrera</span>
          </h2>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            Te avisaremos cuando la plataforma esté lista y tendrás <span className="text-foreground font-semibold">beneficios exclusivos</span> por ser early adopter.
          </p>
        </div>

        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative p-6 sm:p-8 md:p-12 rounded-3xl glass-card text-center"
          >
            {/* Success animation background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-16 h-16 sm:w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
              >
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-500" />
              </motion.div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">¡Estás dentro!</h3>
              <p className="text-muted text-base sm:text-lg mb-4 sm:mb-6">
                Revisa tu correo para confirmar tu acceso anticipado.
              </p>
              
              {/* Bonus offer - mobile optimized */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xs sm:text-sm font-medium">
                  Bonus: <span className="text-gradient font-semibold">"Checklist anti-ATS"</span> gratis
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            noValidate
            className="relative p-6 sm:p-8 md:p-10 rounded-3xl glass-card"
          >
            {errors.form && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-500 text-center bg-red-500/10 p-4 rounded-xl mb-6"
              >
                {errors.form}
              </motion.p>
            )}

            <div className="space-y-4 sm:space-y-5">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-1.5 sm:mb-2 text-foreground">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                    className={`w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-background/50 border ${
                      errors.name ? 'border-red-500' : 'border-card-border'
                    } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm sm:text-base`}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 mt-1.5 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5 sm:mb-2 text-foreground">
                    Correo electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tú@ejemplo.com"
                    className={`w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-background/50 border ${
                      errors.email ? 'border-red-500' : 'border-card-border'
                    } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm sm:text-base`}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 mt-1.5 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5 sm:mb-2 text-foreground">
                  Profesión <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.profession}
                  onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                  placeholder="Ej. Ingeniero de Datos"
                  className={`w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-background/50 border ${
                    errors.profession ? 'border-red-500' : 'border-card-border'
                  } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm sm:text-base`}
                />
                {errors.profession && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-500 mt-1.5 flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.profession}
                  </motion.p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5 sm:mb-2 text-foreground">
                  País <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className={`w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-background/50 border ${
                      errors.country ? 'border-red-500' : 'border-card-border'
                    } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none text-sm sm:text-base`}
                  >
                    <option value="">¿Dónde resides actualmente?</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  <svg className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {errors.country && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-500 mt-1.5 flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.country}
                  </motion.p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 sm:mb-3 text-foreground">
                  Situación actual <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {['Empleado', 'Desempleado', 'Freelancer', 'Estudiante'].map((option) => (
                    <motion.button
                      key={option}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormData({ ...formData, status: option })}
                      className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border-2 transition-all font-medium text-xs sm:text-sm ${
                        formData.status === option
                          ? 'bg-primary/10 border-primary text-primary shadow-lg shadow-primary/20'
                          : 'bg-background/50 border-card-border hover:border-muted'
                      }`}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
                {errors.status && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-500 mt-1.5 flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.status}
                  </motion.p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5 sm:mb-2 text-foreground">
                  ¿Cuál es tu mayor dificultad? <span className="text-muted font-normal">(opcional)</span>
                </label>
                <textarea
                  value={formData.difficulty}
                  onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                  placeholder="Cuéntanos brevemente..."
                  rows={3}
                  className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl bg-background/50 border border-card-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-sm sm:text-base"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 sm:py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed magnetic-hover text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="text-base sm:text-lg">Solicitar Acceso Anticipado</span>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-muted/60 leading-relaxed">
                Al registrarte aceptas nuestra política de privacidad y términos de uso.
                <br />
                No compartiremos tu información con terceros.
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </AnimatedSection>
  )
}
