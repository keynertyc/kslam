import { Eye, Send, Trash2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MySlams = () => {
  return (
    <div className="w-full">
      <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
          <div className="flex">
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                  Mis Slams
              </p>
              <p className="text-xs text-gray-400">Completados por mis amigos</p>
            </div>
            <button className="flex items-center justify-center px-4 py-2 ml-auto rounded-md text-sky-500 bg-sky-100">
              <Send size={16} />
            </button>
          </div>
          <div className="mt-10 dark:text-white">
            <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>
                    Jose Perez
                </p>
                <div className="flex gap-2">
                  <Link href="/slams/view/1" className="flex items-center justify-center px-4 py-2 text-green-500 bg-green-100 rounded-md">
                    <Eye size={16} />
                  </Link>
                  <Link href="/slams/view/2" className="flex items-center justify-center px-4 py-2 text-red-500 bg-red-100 rounded-md">
                      <Trash2Icon size={16} />
                  </Link>
                </div>
            </div>
            <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                <p>
                    Viviana Guerrero
                </p>
                <div className="flex gap-2">
                  <Link href="/slams/view/1" className="flex items-center justify-center px-4 py-2 text-green-500 bg-green-100 rounded-md">
                    <Eye size={16} />
                  </Link>
                  <Link href="/slams/view/2" className="flex items-center justify-center px-4 py-2 text-red-500 bg-red-100 rounded-md">
                      <Trash2Icon size={16} />
                  </Link>
                </div>
            </div>
            <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
                <p>
                    Mónica Suarez
                </p>
                <div className="flex gap-2">
                  <Link href="/slams/view/1" className="flex items-center justify-center px-4 py-2 text-green-500 bg-green-100 rounded-md">
                    <Eye size={16} />
                  </Link>
                  <Link href="/slams/view/2" className="flex items-center justify-center px-4 py-2 text-red-500 bg-red-100 rounded-md">
                      <Trash2Icon size={16} />
                  </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MySlams
