import { auth } from '@clerk/nextjs'
import { Eye, Send, Trash2Icon } from 'lucide-react'
import Link from 'next/link'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { prisma } from '@/lib/db'

// import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const getMySlams = async (userId: string) => {
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
    
  return userWithSlams
}

const MySlams = async () => {
  const { userId: ownerId } = auth()

  const userWithSlams = await getMySlams(ownerId)

  const sendInvitation = async (formData: FormData) => {
    'use server'
    const userId = formData.get('user_id')

    const owner = await prisma.user.findUnique({
      where: { user_id: ownerId }
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

    const slamId = formData.get('slam_id')

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

    // revalidatePath(`/panel`)
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
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="flex items-center justify-center px-4 py-2 ml-auto rounded-md text-sky-500 bg-sky-100">
                  <Send size={16} />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Enviar invitación</AlertDialogTitle>
                </AlertDialogHeader>
                <form action={sendInvitation} className="flex flex-col gap-4">
                  <label className="flex flex-col">
                    <input type="text" name="user_id" className="px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white" placeholder='Ingresa o Copia/Pega ID de Usuario' />
                    <Button className="flex items-center justify-center px-4 py-2 mt-2 text-white">
                        Enviar
                    </Button>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  </label>
                </form>
              </AlertDialogContent>
            </AlertDialog>
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
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="flex items-center justify-center px-4 py-2 text-red-500 bg-red-100 rounded-md">
                        <Trash2Icon size={16} />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                      </AlertDialogHeader>
                      <form action={removeSlam} className="flex flex-col gap-4">
                        <label className="flex flex-col">
                          <input type="hidden" name="slam_id" value={slam.id} />
                          <Button className="flex items-center justify-center px-4 py-2 mt-2 text-white">
                            Confirmar
                          </Button>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        </label>
                      </form>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MySlams
