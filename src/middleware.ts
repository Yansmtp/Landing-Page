import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Permitir acceso a la API de waitlist
  if (request.nextUrl.pathname.startsWith('/api/waitlist')) {
    return NextResponse.next()
  }

  // Permitir acceso a la página de login sin autenticación
  if (request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next()
  }

  // Proteger rutas de admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const adminPassword = request.cookies.get('admin-password')
    
    // Verificar si tiene la cookie de autenticación
    if (adminPassword?.value === process.env.ADMIN_PASSWORD) {
      return NextResponse.next()
    }
    
    // Si no está autenticado, redirigir a login
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  // Permitir todos los demás accesos
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
