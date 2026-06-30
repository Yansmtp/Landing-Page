import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tu-dominio.com'),
  title: 'Consigue Entrevistas, No Solo Envíes CVs | Plataforma IA para Profesionales',
  description: 'Deja de enviar cientos de CVs sin respuesta. Nuestra IA construye una estrategia personalizada para conectar tu talento con las oportunidades que mereces en EE.UU.',
  keywords: 'buscador de empleo IA, optimización de perfil profesional, conseguir trabajo en USA, estrategia de carrera, IA para entrevistas',
  openGraph: {
    title: 'Consigue Entrevistas, No Solo Envíes CVs',
    description: 'Plataforma IA para profesionales que quieren destacar en el mercado estadounidense',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consigue Entrevistas, No Solo Envíes CVs',
    description: 'Plataforma IA para profesionales que quieren destacar en el mercado estadounidense',
    images: ['/og-image.jpg'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://tu-dominio.com',
  },
  verification: {
    google: 'tu-codigo-de-verificacion',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Apex - Asistente IA para Carreras",
              "description": "Plataforma que optimiza perfiles profesionales y aumenta las probabilidades de conseguir entrevistas",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "browserRequirements": "Requiere JavaScript",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}