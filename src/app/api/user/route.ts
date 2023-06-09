import { prisma } from "@/lib/db"
import { NextResponse } from 'next/server'

export async function PATCH(request: Request) {
  const { userId, username } = await request.json()

  try {
    let user = await prisma.user.update({
      where: {
        user_id: userId
      },
      data: {
        username
      }
    })
    
    return NextResponse.json({
      success: true,
      data: user
    })
  } catch (error) {
    return NextResponse.error()
  }
}
