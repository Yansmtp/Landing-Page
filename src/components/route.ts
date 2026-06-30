import { kv } from '@vercel/kv'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, profession, country, status, difficulty } =
      await request.json()

    if (!name || !email || !profession || !country || !status) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos.' },
        { status: 400 },
      )
    }

    // Usamos el email como identificador único para evitar duplicados.
    const userData = {
      name,
      email,
      profession,
      country,
      status,
      difficulty,
      submittedAt: new Date().toISOString(),
    }

    // Guardamos los datos en un hash de Vercel KV llamado 'waitlist'
    await kv.hset('waitlist', { [email]: userData })

    return NextResponse.json({ message: 'Usuario registrado con éxito.' }, { status: 200 })
  } catch (error) {
    console.error(error)
    const errorMessage = error instanceof Error ? error.message : 'Un error desconocido ocurrió'
    return NextResponse.json({ error: 'Error interno del servidor.', details: errorMessage }, { status: 500 })
  }
}