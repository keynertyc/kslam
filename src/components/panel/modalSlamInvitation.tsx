import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { Button } from "../ui/button"
import { Send } from "lucide-react"

interface ModalInvitationProps {
  sendInvitation: (formData: FormData) => Promise<void>
}

const ModalSlamInvitation = ({ sendInvitation }: ModalInvitationProps) => {
  return (
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
  )
}

export default ModalSlamInvitation
