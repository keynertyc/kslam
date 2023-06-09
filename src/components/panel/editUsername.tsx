import { Save } from 'lucide-react'
import React, { useState } from 'react'

interface EditUsernameProps {
  setUsername: (username: string) => void
  changeUsername: () => void
  username: string
}

const EditUsername = ({ setUsername, changeUsername, username }: EditUsernameProps) => {
  const handleInputUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  return (
    <form className="flex flex-row gap-2">
      <input 
        type="text" 
        className="p-2 w-full rounded-md border border-gray-300 dark:bg-gray-800 dark:text-white" 
        placeholder="Ingresa un nombre de usuario" 
        name={username} 
        value={username} 
        onChange={handleInputUsername} />
      <button type="button" className="flex items-center justify-center px-4 py-2 text-indigo-500 bg-indigo-100 rounded-md" onClick={changeUsername}>
        <Save size={16} />
      </button>
    </form>
  )
}

export default EditUsername