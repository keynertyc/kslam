import './globals.css'

export const metadata = {
  title: 'KSLAM',
  description: 'El Clásico juego de Adolecentes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
