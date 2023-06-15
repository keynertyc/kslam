import FormSlam from "@/components/panel/formSlam"

interface FriendsSlamsPageProps {
  params: {
    id: string
  }
}

const FriendsSlamsPage = ({ params }: FriendsSlamsPageProps) => {
  const id: number = parseInt(params.id)

  return (
    <div className="h-screen px-4 pb-24 mt-6 overflow-auto md:px-6">
      <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
        {/* @ts-expect-error Server Component */}
        <FormSlam slamId={id} />  
      </div>
    </div>
  )
}

export default FriendsSlamsPage
