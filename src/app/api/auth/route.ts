import { prisma } from "@/lib/db"
import { NextResponse } from 'next/server'
// import { auth } from '@clerk/nextjs'

export async function POST(request: Request) {
  // Commented out because it is handle by middleware.ts publicRoutes
  // const { userId: authUserId } = auth()
  
  // if(!authUserId){
  //   return new Response("Unauthorized", { status: 401 })
  // }

  const { userId } = await request.json()

  let user = await prisma.user.findUnique({
    where: {
      user_id: userId,
    },
  })

  if (!user) {
    user = await prisma.user.create({
      data: {
        user_id: userId,
      },
    })

    console.log(user)
  }

  return NextResponse.json(user)
}
