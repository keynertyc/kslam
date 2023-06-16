'use client'

import { useRef, useState } from "react"
import { useUser } from '@clerk/nextjs'
import { ClipboardCopy, Edit2, Share2Icon } from "lucide-react"
import EditUsername from "./editUsername"

interface UserCopyProps {
  username: string
}

const UserCopy = ({ username }: UserCopyProps) => {
  const { user } = useUser()

  const [copied, setCopied] = useState<boolean>(false)
  const userRef = useRef<HTMLSpanElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const [currentUsername, setCurrentUsername] = useState<string>(username)
  const [isEditingUsername, setIsEditingUsername] = useState<boolean>(false)

  const handleEditUsername = () => {

    fetch('/api/user', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: user?.id,
        username: currentUsername
      })
    })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      setIsEditingUsername(!isEditingUsername)
    })
    .catch((error) => {
      // console.error(error)
    })
  }

  // const handleTimeOut = () => {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current)
  //   }
  //   timeoutRef.current = setTimeout(() => {
  //     setCopied(false)
  //   }, 3000)
  // }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'SLAM: Comparte tu usuario',
        text: `Hola, envíame una invitación para llenar tu SLAM, mi nombre de usuario es ${currentUsername} . Diviértete con tus amigos en https://cutt.ly/kslam`,
      })
        .then(() => {
          console.log("Shared successfully")
        })
        .catch((error) => {
          console.error("Failed to share:", error)
        })
    } else {
      console.log("Web Share API is not supported on this device.")
    }
  }  
  
  // const handleCopy = () => {
  //   if (userRef.current) {
  //     const textToCopy = userRef.current.textContent || ''

  //     if (navigator.clipboard) {
  //       navigator.clipboard.writeText(textToCopy)
  //       .then(() => {
  //         setCopied(true)
  //         handleTimeOut()
  //       })
  //       .catch((error) => {
  //         // console.error('Failed to copy text:', error)
  //       })
  //     } else {
  //       const textArea = document.createElement('textarea')
  //       textArea.value = textToCopy
  //       document.body.appendChild(textArea)
  //       textArea.select()
  //       document.execCommand('copy')
  //       document.body.removeChild(textArea)

  //       setCopied(true)
  //       handleTimeOut()
  //     }
    
  //   }
  // }
  
  return (
    <div className="flex flex-col mt-6 text-xs text-white">
      <p className="mb-2 underline underline-offset-4">Usuario:</p>
      <div className="flex flex-row items-center gap-2">
        { !isEditingUsername ? (
        <span className="font-bold" ref={userRef}>{currentUsername}</span>
        ) : (
          <EditUsername setUsername={setCurrentUsername} changeUsername={handleEditUsername} username={currentUsername} />
        )}
        <div className="relative">
          <button className="flex items-center justify-center px-4 py-2 text-indigo-500 bg-indigo-100 rounded-md" onClick={handleShare}>
            <Share2Icon size={16} />
          </button>
          {copied && (
            <div className="absolute px-2 py-1 text-xs text-white transition-opacity duration-500 -translate-x-1/2 -translate-y-2 bg-indigo-600 rounded top-[-1.25rem] left-6 opacity-95">
              Copiado
            </div>
          )}
        </div>
        {
          !isEditingUsername && (
            <button className="flex items-center justify-center px-4 py-2 text-indigo-500 bg-indigo-100 rounded-md" onClick={ () => setIsEditingUsername(!isEditingUsername) }>
              <Edit2 size={16} />
            </button>
          )
        }
      </div>
    </div>
  )
}

export default UserCopy
