'use client'
import { useUser } from '@clerk/nextjs'
import { ClipboardCopy } from "lucide-react"
import { useRef, useState } from "react";

const UserCopy = () => {
  const { user } = useUser()

  const [copied, setCopied] = useState(false)
  const userRef = useRef<HTMLSpanElement>(null);
  
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
    <div className="flex gap-2 mt-6 text-xs">
      <h3 className="flex items-center">
        Usuario: &nbsp;<span className="font-bold" ref={userRef}>{user?.id}</span>
      </h3>
      <button className="flex items-center justify-center px-4 py-2 text-indigo-500 bg-indigo-100 rounded-md" onClick={handleCopy}>
        <ClipboardCopy size={16} />
      </button>
    </div>
  )
}

export default UserCopy
