import { prisma } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { Eye } from 'lucide-react'
import { redirect } from 'next/navigation'
import { Slam, User } from '@prisma/client'
import Link from 'next/link'
import ModalRemoveSlam from './modalRemoveSlam'
import ModalSlamInvitation from './modalSlamInvitation'

interface MySlamsWithRelation extends User {
  ownedSlams: (Slam & { 
    user: User 
  })[]
}

const getMySlams = async (userId: string): Promise<MySlamsWithRelation> => {
  const userWithSlams = await prisma.user.findUnique({
    where: {
      user_id: userId
    },
    include: {
      ownedSlams: {
        include: {
          user: true
        },
        where: {
          status: 'completed',
        },
      }
    }
  })

  if (!userWithSlams) {
    throw new Error(`User not found for userId: ${userId}`)
  }
    
  return userWithSlams as MySlamsWithRelation
}

const MySlams = async () => {
  const { userId: ownerId } = auth()

  const userWithSlams = await getMySlams(ownerId as string)

  const sendInvitation = async (formData: FormData) => {
    'use server'
    const userId = formData.get('user_id')?.toString() as unknown as string

    const owner = await prisma.user.findUnique({
      where: { user_id: ownerId as string }
    })

    const user = await prisma.user.findUnique({
      where: { user_id: userId }
    })

    if (!user || !owner) {
      // alert('El usuario no existe')
      return
    }

    if (owner.id === user.id) {
      // alert('No puedes enviarte una invitación a ti mismo')
      return
    }

    await prisma.slam.create({
      data: {
        user_id: user.id,
        owner_id: owner.id
      }
    })

    // revalidatePath(`/panel`);
    redirect(`/panel`)
  }

  const removeSlam = async (formData: FormData) => {
    'use server'

    const slamId = parseInt(formData.get('slam_id')?.toString() as unknown as string)

    await prisma.slamDetails.deleteMany({
      where: {
        slam_id: slamId
      }
    })

    await prisma.slam.delete({
      where: {
        id: slamId
      }
    })

    redirect(`/panel`)
  }

  return (
    <div className="w-full">
      <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
          <div className="flex">
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                Mis Slams
              </p>
              <p className="text-xs text-gray-400">Completados por mis amigos</p>
            </div>
            <ModalSlamInvitation sendInvitation={sendInvitation} />
          </div>
          <div className="mt-10 dark:text-white">
            { userWithSlams.ownedSlams.map(slam => (
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12" key={slam.id}>
                <p>
                  { slam.user.name }
                </p>
                <div className="flex gap-2">
                  <Link href={`/panel/my-slams/${slam.id}`} className="flex items-center justify-center px-4 py-2 text-green-500 bg-green-100 rounded-md">
                    <Eye size={16} />
                  </Link>
                  <ModalRemoveSlam removeSlam={removeSlam} slamId={slam.id} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MySlams
