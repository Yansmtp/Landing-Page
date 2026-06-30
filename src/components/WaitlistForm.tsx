'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
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
    <AnimatedSection id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Sé de los primeros en transformar tu carrera.
          </h2>
          <p className="text-muted">
            Te avisaremos cuando la plataforma esté lista y tendrás beneficios exclusivos por ser early adopter.
          </p>
        </div>

        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8 rounded-2xl bg-green-500/10 border border-green-500/20"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">¡Estás dentro!</h3>
            <p className="text-muted">
              Revisa tu correo para confirmar tu acceso anticipado.
            </p>
            <p className="text-sm text-muted/60 mt-4">
              Mientras tanto, ¿te gustaría recibir nuestro <span className="text-primary">&quot;Checklist anti-ATS&quot;</span> gratis?
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {errors.form && (
              <p className="text-sm text-red-500 text-center bg-red-500/10 p-3 rounded-lg">{errors.form}</p>
            )}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  className={`w-full px-4 py-3 rounded-xl bg-card border ${
                    errors.name ? 'border-red-500' : 'border-card-border'
                  } focus:border-primary outline-none transition-colors`}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Correo electrónico</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tú@ejemplo.com"
                  className={`w-full px-4 py-3 rounded-xl bg-card border ${
                    errors.email ? 'border-red-500' : 'border-card-border'
                  } focus:border-primary outline-none transition-colors`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Profesión</label>
              <input
                type="text"
                value={formData.profession}
                onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                placeholder="Ej. Ingeniero de Datos"
                className={`w-full px-4 py-3 rounded-xl bg-card border ${
                  errors.profession ? 'border-red-500' : 'border-card-border'
                } focus:border-primary outline-none transition-colors`}
              />
              {errors.profession && (
                <p className="text-sm text-red-500 mt-1">{errors.profession}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">País</label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-card border ${
                  errors.country ? 'border-red-500' : 'border-card-border'
                } focus:border-primary outline-none transition-colors appearance-none`}
              >
                <option value="">¿Dónde resides actualmente?</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              {errors.country && (
                <p className="text-sm text-red-500 mt-1">{errors.country}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Situación actual</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Empleado', 'Desempleado', 'Freelancer', 'Estudiante'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFormData({ ...formData, status: option })}
                    className={`px-4 py-2 rounded-xl border transition-all ${
                      formData.status === option
                        ? 'bg-primary/10 border-primary text-primary'
                        : 'bg-card border-card-border hover:border-muted'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.status && (
                <p className="text-sm text-red-500 mt-1">{errors.status}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                ¿Cuál es tu mayor dificultad? <span className="text-muted text-sm">(opcional)</span>
              </label>
              <textarea
                value={formData.difficulty}
                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                placeholder="Cuéntanos brevemente..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-card border border-card-border focus:border-primary outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Solicitar Acceso Anticipado</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-center text-xs text-muted/60">
              Al registrarte aceptas nuestra política de privacidad y términos de uso.
              <br />
              No compartiremos tu información con terceros.
            </p>
          </form>
        )}
      </div>
    </AnimatedSection>
  )
}