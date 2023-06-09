import { prisma } from "@/lib/db"
import { NextResponse } from 'next/server'
import { clerkClient } from '@clerk/nextjs'

export async function POST(request: Request) {
  const { userId } = await request.json()

  const { firstName, lastName } = await clerkClient.users.getUser(userId)

  let user = await prisma.user.upsert({
    where: {
      user_id: userId
    },
    update: {
      name: `${firstName} ${lastName}`
    },
    create: {
      user_id: userId,
      username: userId,
      name: `${firstName} ${lastName}`
    }
  })

  return NextResponse.json(user)
}
