import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(req) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, password } = body

    if (!firstName || !lastName || !email || !password) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }),
        { status: 400 }
      )
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return new Response(
        JSON.stringify({ message: 'Email already registered' }),
        { status: 409 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    })

    return new Response(
      JSON.stringify({ message: 'User registered', userId: newUser.id }),
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    return new Response(
      JSON.stringify({ message: 'Server error' }),
      { status: 500 }
    )
  }
}
