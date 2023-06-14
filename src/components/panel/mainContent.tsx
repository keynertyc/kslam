import { prisma } from '@/lib/db'
import FriendsSlams from './friendsSlams'
import MySlams from './mySlams'
import UserCopy from './userCopy'
import { auth } from '@clerk/nextjs'

const getCurrentUser = async (userId: string) => {
  const currenUser = await prisma.user.findUnique({
    where: { user_id: userId }
  })

  if (!currenUser) {
    throw new Error(`User not found for userId: ${userId}`)
  }

  return currenUser
}

const MainContent = async () => {
  const { userId } = auth();

  const { username } = await getCurrentUser(userId as string)

  return (
    <div className="h-screen px-4 pb-24 mt-6 overflow-auto md:px-6">
      <h1 className="text-4xl font-semibold text-white">
        SLAM
      </h1>
      <h2 className="text-white text-md">
        Diviértete junto a tus amigos en el clásico juego.
      </h2>
      <UserCopy username={username} />
      <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
        <MySlams />
        <FriendsSlams />
      </div>
    </div>
  )
}

export default MainContent