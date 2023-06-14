export default function loading () {
  return (
    <main className="relative h-screen overflow-hidden">
      <div className="flex items-start justify-between">
        <div className="flex flex-col w-full md:space-y-4">
          <div className="h-screen px-4 pb-24 mt-6 overflow-auto md:px-6">
            <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="h-screen px-4 pb-24 mt-6 overflow-auto md:px-6">
                <h1 className="text-4xl font-semibold text-white">SLAM</h1>
                <h2 className="text-white text-md">Diviértete junto a tus amigos en el clásico juego.</h2>
                <div className="flex flex-col mt-6 text-xs text-white">
                  <div className="flex flex-row items-center gap-2">
                    <button className="flex items-center justify-center px-4 py-2 text-indigo-500 bg-indigo-100 rounded-md">
                      <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 text-indigo-500 bg-indigo-100 rounded-md">
                      <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="w-full">
                    <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                      <div className="flex">
                        <div className="flex flex-col">
                          <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                            Mis Slams
                          </p>
                          <p className="text-xs text-gray-400">Completados por mis amigos</p>
                        </div>
                        <button className="flex items-center justify-center h-10 px-4 py-2 ml-auto text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-primary/90 text-sky-500 bg-sky-100" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r0:" data-state="closed">
                          <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                        </button>
                      </div>
                      <div className="mt-10 dark:text-white">
                        <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                          <p>
                            <div className="w-20 h-4 bg-gray-500 rounded animate-pulse"></div>
                          </p>
                          <div className="flex gap-2">
                            <a className="flex items-center justify-center px-4 py-2 text-green-500 bg-green-100 rounded-md" href="/panel/my-slams/1">
                              <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                            </a>
                            <button className="flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-red-500 transition-colors bg-red-100 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-primary/90" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r3:" data-state="closed">
                              <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                      <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                        Slams de mis amigos
                      </p>
                      <p className="text-xs text-gray-400">Completados por mí</p>
                      <div className="mt-10 dark:text-white">
                        <div className="w-40 h-4 bg-gray-500 rounded animate-pulse"></div>
                        <div className="w-40 h-4 bg-gray-500 rounded animate-pulse"></div>
                        <div className="w-40 h-4 bg-gray-500 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
