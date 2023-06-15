'use client'
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { useRouter } from 'next/navigation';
import SlamLogo from '../../public/slam.svg'
import Image from 'next/image'
import { LogIn, PlayIcon, UserPlus2 } from "lucide-react";

const MainContent = () => {
  const router = useRouter()

  return (
    <>
      <div className="flex items-center justify-center pt-[10%] md:hidden">
        <Image
          priority
          src={SlamLogo}
          alt="Slam"
          width={250}
          height={250}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pt-[10%] md:hidden">
        <SignedIn>
          <button className="flex items-center justify-center w-2/3 h-20 text-2xl text-[#06083c] bg-white font-bold border-2 border-double border-[#373534]-500 rounded-full" onClick={() => router.push('/panel')}>
            <p className="uppercase">Entrar</p>
            <PlayIcon size={32} className="inline-block ml-2" />
          </button>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="flex items-center justify-center w-2/3 h-20 text-xl text-[#06083c] bg-white font-bold border-2 border-double border-[#373534]-500 rounded-full" onClick={() => router.push('/panel')}>
              <p className="uppercase">Inicia Sesión</p>
              <LogIn size={32} className="inline-block ml-2" />
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="flex items-center justify-center w-2/3 h-20 text-2xl text-[#06083c] bg-white font-bold border-2 border-double border-[#373534]-500 rounded-full" onClick={() => router.push('/panel')}>
              <p className="uppercase">Regístrate</p>
              <UserPlus2 size={32} className="inline-block ml-2" />
            </button>
          </SignUpButton>
        </SignedOut>
      </div>
    </>
  )
}

export default MainContent