'use client'
import React, { useRef, useState } from 'react'
import { ClipboardCopy } from 'lucide-react'
import MySlams from './mySlams'
import FriendsSlams from './friendsSlams'

const MainContent = () => {
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
    <div className="h-screen px-4 pb-24 mt-6 overflow-auto md:px-6">
      <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
          SLAM
      </h1>
      <h2 className="text-gray-400 text-md">
          Diviértete junto a tus amigos en el clásico juego.
      </h2>
      <div className="flex gap-2 mt-6 text-xs">
        <h3 className="flex items-center">
            Usuario: &nbsp;<span className="font-bold" ref={userRef}>user_382637823</span>
        </h3>
        <button className="flex items-center justify-center px-4 py-2 text-indigo-500 bg-indigo-100 rounded-md" onClick={handleCopy}>
            <ClipboardCopy size={16} />
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
        <MySlams />
        <FriendsSlams />
      </div>
    </div>
  )
}

export default MainContent