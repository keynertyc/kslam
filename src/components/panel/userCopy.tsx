'use client'

import { useRef, useState } from "react"
import { useUser } from '@clerk/nextjs'
import { ClipboardCopy, Edit2 } from "lucide-react"
import EditUsername from "./editUsername"

interface UserCopyProps {
  username: string
}

const UserCopy = ({ username }: UserCopyProps) => {
  const { user } = useUser()

  const [_, setCopied] = useState<boolean>(false)
  const userRef = useRef<HTMLSpanElement>(null)

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
  
  const handleCopy = () => {
    if (userRef.current) {
      const textToCopy = userRef.current.textContent || ''
      
      navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true)
      })
      .catch((error) => {
        // console.error('Failed to copy text:', error)
      })
    }
  }
  
  return (
    <div className="flex flex-col mt-6 text-xs">
      <p>Usuario:</p>
      <div className="flex flex-row gap-2 items-center">
        { !isEditingUsername ? (
        <span className="font-bold" ref={userRef}>{currentUsername}</span>
        ) : (
          <EditUsername setUsername={setCurrentUsername} changeUsername={handleEditUsername} username={currentUsername} />
        )}
        <button className="flex items-center justify-center px-4 py-2 text-indigo-500 bg-indigo-100 rounded-md" onClick={handleCopy}>
          <ClipboardCopy size={16} />
        </button>
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
