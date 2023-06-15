import MainContent from "@/components/panel/mainContent"

const PanelPage = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <MainContent />
    </>
  )
}

export default PanelPage