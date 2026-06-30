# Apex Landing Page

Plataforma IA para profesionales que quieren destacar en el mercado estadounidense. Landing page moderna con Next.js, Tailwind CSS y animaciones suaves.

## 🚀 Características

- ✨ Animaciones fluidas con Framer Motion
- 🎨 Diseño moderno con Tailwind CSS
- 📱 Responsive y mobile-first
- ⚡ Optimizado para rendimiento (Next.js 14)
- 🔍 SEO listo para producción
- 📝 Formulario de waitlist funcional

## 📋 Requisitos

- Node.js 18.17 o superior
- npm o yarn

## 🛠️ Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/Yansmtp/Landing-Page.git
cd Landing-Page

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 🚀 Desplegar en Vercel

### Opción 1: Desde GitHub (Recomendado)

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en "New Project"
3. Selecciona el repositorio "Landing-Page"
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Configura las variables de entorno si es necesario
6. Haz clic en "Deploy"

### Opción 2: Desde la CLI

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Desplegar
vercel
```

## 📦 Variables de Entorno

No se requieren variables de entorno para la versión actual. Si en el futuro necesitas conectar APIs o servicios, copia `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

## 📊 Componentes

- **Hero** - Sección principal con headline y CTA
- **Problem** - Problemas que resuelve la plataforma
- **HowItWorks** - Cómo funciona el sistema
- **Benefits** - Beneficios principales
- **TargetAudience** - A quién va dirigido
- **WhyDifferent** - Por qué es diferente
- **Mockup** - Demostración visual
- **Testimonial** - Testimonios de usuarios
- **FAQ** - Preguntas frecuentes
- **WaitlistForm** - Formulario de registro
- **Footer** - Pie de página

## 🎨 Personalización

### Colores
Edita `tailwind.config.js`:
```js
colors: {
  background: '#0a0a0a',
  foreground: '#ffffff',
  primary: '#8b5cf6',
  // ... más colores
}
```

### Contenido
Edita los componentes en `src/components/` para cambiar texto e imágenes.

### Tipografía
La fuente base es "Inter" importada desde Google Fonts en `src/app/layout.tsx`.

## 📈 Optimizaciones

El proyecto incluye:
- Image optimization de Next.js
- Code splitting automático
- CSS minificado
- Static generation donde es posible
- Animations solo en el cliente

## 🔧 Scripts Disponibles

```bash
npm run dev       # Desarrollo local
npm run build     # Build de producción
npm start         # Iniciar servidor
npm run lint      # Ejecutar linter
```

## 📝 Licencia

MIT

## 👤 Autor

[Yansmtp](https://github.com/Yansmtp)

---

¿Preguntas? Abre un [issue](https://github.com/Yansmtp/Landing-Page/issues) en el repositorio.
