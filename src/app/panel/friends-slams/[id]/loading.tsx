

export default function loading () {
  return (
    <div className="h-screen px-4 pb-24 mt-6 overflow-auto md:px-6">
      <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full">
          <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
            <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">Completado por <span className="w-24 h-4 bg-gray-500 rounded animate-pulse"></span></p>
            <p className="text-sm font-semibold text-gray-700 w-max dark:text-white"><span className="h-4 bg-gray-500 rounded animate-pulse w-28"></span></p>
            <div className="mt-10 dark:text-white">
              <div className="flex flex-col justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p className="flex"><span className="w-4 h-4 bg-gray-500 rounded animate-pulse"></span><span className="w-20 h-4 ml-2 bg-gray-500 rounded animate-pulse"></span></p>
                <p className="flex"><span className="w-4 h-4 bg-gray-500 rounded animate-pulse"></span><span className="w-12 h-4 ml-2 bg-gray-500 rounded animate-pulse"></span></p>
              </div>
              <div className="flex flex-col justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p className="flex"><span className="w-4 h-4 bg-gray-500 rounded animate-pulse"></span><span className="w-24 h-4 ml-2 bg-gray-500 rounded animate-pulse"></span></p>
                <p className="flex"><span className="w-4 h-4 bg-gray-500 rounded animate-pulse"></span><span className="w-8 h-4 ml-2 bg-gray-500 rounded animate-pulse"></span></p>
              </div>
              <div className="flex flex-col justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p className="flex"><span className="w-4 h-4 bg-gray-500 rounded animate-pulse"></span><span className="w-24 h-4 ml-2 bg-gray-500 rounded animate-pulse"></span></p>
                <p className="flex"><span className="w-4 h-4 bg-gray-500 rounded animate-pulse"></span><span className="w-8 h-4 ml-2 bg-gray-500 rounded animate-pulse"></span></p>
              </div>
              <div className="flex flex-col justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p className="flex"><span className="w-4 h-4 bg-gray-500 rounded animate-pulse"></span><span className="w-24 h-4 ml-2 bg-gray-500 rounded animate-pulse"></span></p>
                <p className="flex"><span className="w-4 h-4 bg-gray-500 rounded animate-pulse"></span><span className="w-8 h-4 ml-2 bg-gray-500 rounded animate-pulse"></span></p>
              </div>
              <div className="flex flex-col justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p className="flex"><span className="w-4 h-4 bg-gray-500 rounded animate-pulse"></span><span className="w-24 h-4 ml-2 bg-gray-500 rounded animate-pulse"></span></p>
                <p className="flex"><span className="w-4 h-4 bg-gray-500 rounded animate-pulse"></span><span className="w-8 h-4 ml-2 bg-gray-500 rounded animate-pulse"></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
