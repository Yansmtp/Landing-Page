import { NextResponse } from 'next/server'
import { createClient } from 'redis'

let redisClient: ReturnType<typeof createClient> | null = null

async function getRedisClient() {
  if (!redisClient) {
    redisClient = createClient({
      url: process.env.REDIS_URL,
    })
    
    redisClient.on('error', (err) => {
      console.error('Redis Client Error:', err)
    })
    
    await redisClient.connect()
  }
  
  return redisClient
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, profession, country, status, difficulty } = body

    // Validar datos requeridos
    if (!name || !email || !profession || !country || !status) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /\S+@\S+\.\S+/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Correo electrónico inválido' },
        { status: 400 }
      )
    }

    const redis = await getRedisClient()

    // Crear un ID único para el registro
    const timestamp = Date.now()
    const waitlistId = `waitlist:${timestamp}:${email}`

    // Guardar datos en Redis
    const waitlistData = {
      name,
      email,
      profession,
      country,
      status,
      difficulty: difficulty || '',
      createdAt: new Date().toISOString(),
    }

    // Guardar como hash en Redis
    await redis.hSet(waitlistId, {
      name: waitlistData.name,
      email: waitlistData.email,
      profession: waitlistData.profession,
      country: waitlistData.country,
      status: waitlistData.status,
      difficulty: waitlistData.difficulty,
      createdAt: waitlistData.createdAt,
    })

    // Agregar a un set para poder listar todos los registros
    await redis.sAdd('waitlist:all', waitlistId)

    // Establecer TTL de 1 año (opcional, para limpieza automática)
    await redis.expire(waitlistId, 365 * 24 * 60 * 60)

    console.log('Waitlist registration saved:', waitlistId)

    return NextResponse.json(
      { 
        message: 'Registro exitoso',
        data: waitlistData 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error saving to waitlist:', error)
    return NextResponse.json(
      { error: 'Error al procesar el registro. Por favor, intenta de nuevo.' },
      { status: 500 }
    )
  }
}

// Endpoint para obtener registros de la waitlist (opcional, para administración)
export async function GET() {
  try {
    const redis = await getRedisClient()
    
    // Obtener todos los IDs de la waitlist
    const waitlistIds = await redis.sMembers('waitlist:all')
    
    // Obtener los datos de cada registro
    const waitlistEntries = await Promise.all(
      waitlistIds.map(async (id) => {
        const data = await redis.hGetAll(id)
        return { id, ...data }
      })
    )

    return NextResponse.json(
      { 
        count: waitlistEntries.length,
        entries: waitlistEntries 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching waitlist:', error)
    return NextResponse.json(
      { error: 'Error al obtener los registros' },
      { status: 500 }
    )
  }
}