import ShowSlam from "@/components/panel/showSlam"

interface MySlamsPageProps {
  params: {
    id: string
  }
}

const MySlamsPage = ({ params }: MySlamsPageProps) => {
  const id: number = parseInt(params.id)
  
  return (
    <div className="h-screen px-4 pb-24 mt-6 overflow-auto md:px-6">
      <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
        {/* @ts-expect-error Server Component */}
        <ShowSlam slamId={id} />  
      </div>
    </div>
  )
}

export default MySlamsPage
