'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-card-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-bold">Apex</span>
          </div>

          <p className="text-sm text-muted/60 text-center">
            © 2024 Apex. Construyendo el futuro del desarrollo profesional.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted/60 hover:text-foreground transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-sm text-muted/60 hover:text-foreground transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}