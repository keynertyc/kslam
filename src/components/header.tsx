import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from 'next/link'
import SlamLogo from '../../public/slam.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="sticky top-0 z-40 text-gray-600 md:bg-white body-font">
      <div className="container flex flex-row flex-wrap p-5 mx-auto md:justify-between md:items-center">
        <Link href="/" className="hidden md:inline">
          <div className="flex items-center font-medium text-gray-900 title-font md:mb-0">
            <Image
              priority
              src={SlamLogo}
              alt="Slam"
              width={40}
              height={40}
            />
          </div>
        </Link>
        <nav className="flex-wrap items-center justify-center hidden text-base md:inline md:ml-auto md:mr-auto">
          <a className="mr-5 hover:text-gray-900">Inicio</a>
          <a className="mr-5 hover:text-gray-900">Funcionamiento</a>
          <a className="mr-5 hover:text-gray-900">Tendencia</a>
          <a className="mr-5 hover:text-gray-900">Contacto</a>
        </nav>
        <div className="flex items-center ml-auto md:ml-0">
          <SignedIn>
            <Link href="/panel" className="hidden md:inline">
              Ir a Aplicaciónss
            </Link>
            &nbsp;&nbsp;
            <UserButton />
          </SignedIn>
        </div>
        <div className="hidden md:inline">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="btn">
                Sign in
              </button>
            </SignInButton>
            &nbsp;&nbsp; / &nbsp;&nbsp;
            <SignUpButton mode="modal">
              <button className="btn">
                Sign up
              </button>
            </SignUpButton>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header
