import React from 'react'
import { Badge } from '@/components/ui/badge'

const FriendsSlams = () => {
  return (
    <div className="w-full">
      <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
          <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
              Slams de mis amigos
          </p>
          <p className="text-xs text-gray-400">Completados por mí</p>
          <div className="mt-10 dark:text-white">
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                  <p>
                      Jose Perez
                  </p>
                  <Badge variant="destructive">Pendiente</Badge>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>
                      Viviana Guerrero
                  </p>
                  <Badge variant="default">Completado</Badge>
              </div>
              <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
                  <p>
                      Mónica Suarez
                  </p>
                  <Badge variant="destructive">Pendiente</Badge>
              </div>
          </div>
      </div>
  </div>
  )
}

export default FriendsSlams
