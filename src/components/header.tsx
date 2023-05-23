import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from 'next/link'

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link href="/">
          <div className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">KSlam</span>
          </div>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <a className="mr-5 hover:text-gray-900">Inicio</a>
          <a className="mr-5 hover:text-gray-900">Funcionamiento</a>
          <a className="mr-5 hover:text-gray-900">Tendencia</a>
          <a className="mr-5 hover:text-gray-900">Contacto</a>
        </nav>
        <SignedIn>
          <Link href="/dashboard">
            Dashboard
          </Link>
          &nbsp;&nbsp;
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="btn">
              Sign in
            </button>
          </SignInButton>
          &nbsp;&nbsp;
          /
          &nbsp;&nbsp;
          <SignUpButton mode="modal">
            <button className="btn">
              Sign up
            </button>
          </SignUpButton>
        </SignedOut>
      </div>
    </header>
  )
}

export default Header
