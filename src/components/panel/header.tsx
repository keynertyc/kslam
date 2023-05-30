'use client'
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className="z-40 flex items-center justify-between w-full h-16">
        <div className="block ml-6 lg:hidden">
            <button className="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md" onClick={toggleMenu}>
                <svg width="20" height="20" className="text-gray-400" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                    </path>
                </svg>
            </button>
        </div>
        <Link href="/panel" className="md:hidden">
          <div className="flex items-center font-medium text-gray-900 title-font md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">KSlam</span>
          </div>
        </Link>
        <div className="relative z-20 flex flex-col justify-center h-full px-3 md:w-full">
            <div className="relative flex items-center justify-end w-full p-1 space-x-4">
                <span className="w-1 h-8 bg-gray-200 rounded-lg">
                </span>
                <UserButton />
            </div>
        </div>
        {isMenuOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-indigo-500 bg-opacity-100">
          <button
            className="absolute p-2 text-2xl text-white rounded-full top-2 right-2"
            onClick={toggleMenu}
          >
            X
          </button>
          <ul className="flex flex-col items-center justify-center h-full space-y-6 text-white">
            <li>
              <Link href="/panel" className="text-2xl text-white" onClick={handleLinkClick}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/slams" className="text-2xl text-white" onClick={handleLinkClick}>
                Slams
              </Link>
            </li>
            <li>
              <Link href="/" className="text-2xl text-white">
                Pagina Inicial
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;