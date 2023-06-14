'use client';
import SlamLogo from '../../../public/slam.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const ErrorPage = () => {

  const router = useRouter()

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

    if (isMobile) {
      router.push('/')
    }
  }, [])

  return (
    <div className="container flex flex-col items-center justify-center h-screen gap-4 text-white uppercase">
      <Image
        priority
        src={SlamLogo}
        alt="Slam"
        width={250}
        height={250}
      />
      <h1 className="text-5xl text-center pl-36 pr-36">Para una mejor experiencia ingresa desde un dispositivo móvil</h1>
    </div>
  )
}

export default ErrorPage
