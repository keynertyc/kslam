import '../styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { esES } from '@clerk/localizations'
import DeviceDetect from '@/components/deviceDetect'

export const metadata = {
  title: 'KSLAM',
  description: 'El Clásico juego de Adolecentes',
  viewport: 'width=device-width,user-scalable=no'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="en">
        <body className="bg-cover bg-slam-pattern">
          <DeviceDetect />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
