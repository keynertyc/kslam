import { Save } from 'lucide-react'
import React from 'react'

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
        className="w-full p-2 text-black border border-gray-300 rounded-md" 
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