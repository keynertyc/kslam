'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const DeviceDetect = () => {
  const router = useRouter()

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

    if (!isMobile) {
      router.push('/error')
    }
  }, [])

  return  null
}

export default DeviceDetect
