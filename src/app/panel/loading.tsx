export default function loading () {
  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <div className="flex flex-col w-full md:space-y-4">
          <div className="h-screen px-4 pb-24 mt-6 overflow-auto md:px-6">
            <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
              Loading...
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
