'use server'

import { auth } from '@clerk/nextjs'
import { Badge } from '@/components/ui/badge'
import { prisma } from '@/lib/db'
import { User } from '@prisma/client'
import Link from 'next/link';

const getFriendsSlams = async (userId: string): Promise<IFriendsSlamsWithRelation> => {
  const userWithSlams = await prisma.user.findUnique({
    where: {
      user_id: userId
    },
    include: {
      participatedSlams: {
        include: {
          owner: true
        }
      }
    }
  })

  if (!userWithSlams) {
    throw new Error(`User not found for userId: ${userId}`);
  }
    
  return userWithSlams as IFriendsSlamsWithRelation
}

const FriendsSlams = async () => {
  
  const { userId } = auth()

  const userWithSlams: IFriendsSlamsWithRelation = await getFriendsSlams(userId as string)

  return (
    <div className="w-full">
      <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
        <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
          Slams de mis amigos
        </p>
        <p className="text-xs text-gray-400">Completados por mí</p>
        <div className="mt-10 dark:text-white">
          { userWithSlams.participatedSlams.map(({ id, status, owner }: { id: number, status: string, owner: User }) => status == 'pending'? 
            (
              <Link href={ `/panel/friends-slams/${id}` } className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12" key={ id }>
                <p>
                  { owner.name }
                </p>
                <Badge variant="destructive">{
                  status == 'pending'? 'pendiente' : 'completado'
                }</Badge>
              </Link>
            )
            :
            (
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12" key={ id }>
                <p>
                  { owner.name }
                </p>
                <Badge variant={ status == 'pending'? 'destructive' : 'default' }>{
                  status == 'pending'? 'pendiente' : 'completado'
                }</Badge>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default FriendsSlams
