import Header from "@/components/panel/header"
import MainContent from "@/components/panel/mainContent"
import Sidebar from "@/components/panel/sidebar"

const DashboardPage = () => {
  return ( 
    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="flex items-start justify-between">
            <Sidebar />
            <div className="flex flex-col w-full md:space-y-4">
                <Header />
                <MainContent />
            </div>
        </div>
    </main>
  )
}

export default DashboardPage