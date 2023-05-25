'use client'
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { useRouter } from 'next/navigation';

const MainContent = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2 md:hidden">
      <SignedIn>
        <button className="w-2/3 h-24 text-2xl text-white bg-indigo-500 rounded-lg" onClick={() => router.push('/dashboard')}>
          Ir a Aplicación
        </button>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="w-2/3 h-24 text-2xl text-white bg-indigo-500 rounded-lg">
            Ingresar
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="w-2/3 h-24 text-2xl text-white bg-indigo-500 rounded-lg">
            Registrarse
          </button>
        </SignUpButton>
      </SignedOut>
    </div>
  )
}

export default MainContent