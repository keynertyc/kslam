import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from 'next/link'

const Header = () => {
  return (
    <header className="sticky top-0 z-40 text-gray-600 bg-white body-font">
      <div className="container flex flex-row flex-wrap p-5 mx-auto md:justify-between md:items-center">
        <Link href="/" className="">
          <div className="flex items-center font-medium text-gray-900 title-font md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">KSlam</span>
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
            <Link href="/dashboard" className="hidden md:inline">
              Ir a Aplicación
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
