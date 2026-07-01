import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { password } = body

    // Verificar la contraseña
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Contraseña incorrecta' },
        { status: 401 }
      )
    }

    // Crear respuesta con cookie de autenticación
    const response = NextResponse.json(
      { message: 'Autenticación exitosa' },
      { status: 200 }
    )

    // Establecer cookie segura (httpOnly para mayor seguridad)
    response.cookies.set('admin-password', password, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 días
      path: '/',
    })

    return response
  } catch (error) {
    console.error('Error en login de admin:', error)
    return NextResponse.json(
      { error: 'Error de autenticación' },
      { status: 500 }
    )
  }
}