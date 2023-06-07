import ShowSlam from "@/components/panel/showSlam"

const MySlamsPage = ({ params }) => {
  return (
    <div className="h-screen px-4 pb-24 mt-6 overflow-auto md:px-6">
      <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
        <ShowSlam slamId={params.id} />  
      </div>
    </div>
  )
}

export default MySlamsPage
