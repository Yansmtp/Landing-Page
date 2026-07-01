'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Mail, Briefcase, MapPin, Clock, ExternalLink } from 'lucide-react'

interface WaitlistEntry {
  id: string
  name: string
  email: string
  profession: string
  country: string
  status: string
  difficulty: string
  createdAt: string
}

export default function AdminWaitlistPage() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchWaitlist = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/waitlist')
      
      if (!response.ok) {
        throw new Error('Error al cargar los datos')
      }
      
      const data = await response.json()
      setEntries(data.entries || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWaitlist()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Waitlist</h1>
              <p className="text-muted mt-1">Gestiona los registros de la landing page</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8"
        >
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm mb-1">Total Registros</p>
                <p className="text-3xl font-bold text-foreground">{entries.length}</p>
                <p className="text-xs text-muted mt-1">100%</p>
              </div>
              <Users className="w-10 h-10 text-primary/30" />
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm mb-1">Empleados</p>
                <p className="text-3xl font-bold text-foreground">
                  {entries.filter(e => e.status === 'Empleado').length}
                </p>
                <p className="text-xs text-muted mt-1">
                  {entries.length > 0 ? ((entries.filter(e => e.status === 'Empleado').length / entries.length) * 100).toFixed(1) : 0}%
                </p>
              </div>
              <Briefcase className="w-10 h-10 text-primary/30" />
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm mb-1">Desempleados</p>
                <p className="text-3xl font-bold text-foreground">
                  {entries.filter(e => e.status === 'Desempleado').length}
                </p>
                <p className="text-xs text-muted mt-1">
                  {entries.length > 0 ? ((entries.filter(e => e.status === 'Desempleado').length / entries.length) * 100).toFixed(1) : 0}%
                </p>
              </div>
              <Briefcase className="w-10 h-10 text-primary/30" />
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm mb-1">Freelancers</p>
                <p className="text-3xl font-bold text-foreground">
                  {entries.filter(e => e.status === 'Freelancer').length}
                </p>
                <p className="text-xs text-muted mt-1">
                  {entries.length > 0 ? ((entries.filter(e => e.status === 'Freelancer').length / entries.length) * 100).toFixed(1) : 0}%
                </p>
              </div>
              <Briefcase className="w-10 h-10 text-primary/30" />
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted text-sm mb-1">Estudiantes</p>
                <p className="text-3xl font-bold text-foreground">
                  {entries.filter(e => e.status === 'Estudiante').length}
                </p>
                <p className="text-xs text-muted mt-1">
                  {entries.length > 0 ? ((entries.filter(e => e.status === 'Estudiante').length / entries.length) * 100).toFixed(1) : 0}%
                </p>
              </div>
              <Briefcase className="w-10 h-10 text-primary/30" />
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <button
            onClick={fetchWaitlist}
            className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50"
          >
            Actualizar Datos
          </button>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500"
          >
            {error}
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Table */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-background/50 border-b border-card-border">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Nombre
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Profesión
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      País
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Dificultad
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Fecha
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border">
                  {entries.map((entry, index) => (
                    <motion.tr
                      key={entry.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-background/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-sm font-semibold text-primary">
                              {entry.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <span className="font-medium text-foreground">{entry.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-muted">
                          <Mail className="w-4 h-4" />
                          <a 
                            href={`mailto:${entry.email}`}
                            className="hover:text-primary transition-colors"
                          >
                            {entry.email}
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-foreground">{entry.profession}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-muted">
                          <MapPin className="w-4 h-4" />
                          {entry.country}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {entry.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted max-w-xs truncate">
                        {entry.difficulty || '-'}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-muted text-sm">
                          <Clock className="w-4 h-4" />
                          {formatDate(entry.createdAt)}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {entries.length === 0 && (
              <div className="text-center py-20">
                <Users className="w-16 h-16 text-muted/30 mx-auto mb-4" />
                <p className="text-muted text-lg">No hay registros aún</p>
                <p className="text-muted/60 text-sm mt-2">
                  Los registros aparecerán aquí cuando alguien se suscriba
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Footer Info */}
        {!loading && !error && entries.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-center text-sm text-muted"
          >
            Mostrando {entries.length} {entries.length === 1 ? 'registro' : 'registros'} en total
          </motion.div>
        )}
      </div>
    </div>
  )
}