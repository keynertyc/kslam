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

import { revalidatePath } from 'next/cache'

const MySlams = () => {
  const { userId: ownerId } = auth()

  const sendInvitation = async (formData: FormData) => {
    'use server'
    const userId = formData.get('user_id')

    const owner = await prisma.user.findUnique({
      where: {
        user_id: ownerId
      }
    })

    const user = await prisma.user.findUnique({
      where: {
        user_id: userId
      }
    })

    if (!user || !owner) {
      // alert('El usuario no existe')
      return
    }

    if (owner.id === user.id) {
      // alert('No puedes enviarte una invitación a ti mismo')
      return
    }

    const slam = await prisma.slam.create({
      data: {
        user_id: user.id,
        owner_id: owner.id
      }
    })

    revalidatePath(`/panel`);
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
            <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>
                    Jose Perez
                </p>
                <div className="flex gap-2">
                  <Link href="/slams/view/1" className="flex items-center justify-center px-4 py-2 text-green-500 bg-green-100 rounded-md">
                    <Eye size={16} />
                  </Link>
                  <Link href="/slams/view/2" className="flex items-center justify-center px-4 py-2 text-red-500 bg-red-100 rounded-md">
                      <Trash2Icon size={16} />
                  </Link>
                </div>
            </div>
            <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                <p>
                    Viviana Guerrero
                </p>
                <div className="flex gap-2">
                  <Link href="/slams/view/1" className="flex items-center justify-center px-4 py-2 text-green-500 bg-green-100 rounded-md">
                    <Eye size={16} />
                  </Link>
                  <Link href="/slams/view/2" className="flex items-center justify-center px-4 py-2 text-red-500 bg-red-100 rounded-md">
                      <Trash2Icon size={16} />
                  </Link>
                </div>
            </div>
            <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
                <p>
                    Mónica Suarez
                </p>
                <div className="flex gap-2">
                  <Link href="/slams/view/1" className="flex items-center justify-center px-4 py-2 text-green-500 bg-green-100 rounded-md">
                    <Eye size={16} />
                  </Link>
                  <Link href="/slams/view/2" className="flex items-center justify-center px-4 py-2 text-red-500 bg-red-100 rounded-md">
                      <Trash2Icon size={16} />
                  </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MySlams
