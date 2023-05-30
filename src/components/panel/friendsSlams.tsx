'use server'
import { auth } from '@clerk/nextjs';
import { Badge } from '@/components/ui/badge'
import { prisma } from '@/lib/db'

const getFriendsSlams = async (userId: string) => {
  const user = await prisma.user.findUnique({
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
    
  return user
}

const FriendsSlams = async () => {
  
  const { userId } = auth()

  const user = await getFriendsSlams(userId)

  return (
    <div className="w-full">
      <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
        <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
          Slams de mis amigos
        </p>
        <p className="text-xs text-gray-400">Completados por mí</p>
        <div className="mt-10 dark:text-white">
          { user.participatedSlams.map(slam => (
            <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12" key={slam.id}>
              <p>
                { slam.owner.name }
              </p>
              <Badge variant="destructive">{
                slam.status == 'pending'? 'pendiente' : 'completado'
              }</Badge>
            </div>
          ))}
        </div>
      </div>
  </div>
  )
}

export default FriendsSlams
