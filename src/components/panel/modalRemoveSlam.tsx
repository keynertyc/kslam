import React from 'react'
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog'
import { Button } from '../ui/button'
import { Trash2Icon } from 'lucide-react'

interface ModalRemoveSlamProps {
  removeSlam: (formData: FormData) => Promise<void>
  slamId: number
}

const ModalRemoveSlam = ( { removeSlam, slamId }: ModalRemoveSlamProps ) => {
  return (
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
            <input type="hidden" name="slam_id" value={slamId} />
            <Button className="flex items-center justify-center px-4 py-2 mt-2 text-white">
              Confirmar
            </Button>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
          </label>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ModalRemoveSlam
