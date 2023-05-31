import { prisma } from '@/lib/db'
import { Button } from '../ui/button'
// import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const getSlamQuestions = async () => {
  const questions = await prisma.question.findMany()

  return questions
}

const SlamForm = async ({ slamId }) => {
  const slamQuestions = await getSlamQuestions()

  const answerSlam = async (formData: FormData) => {
    'use server'
    const answers = Array.from(formData.entries())
    .filter(([key]) => key.startsWith('id['))
    .reduce((result, [key, value]) => {
      const nameKey = key.match(/\[(\d+)\]/)[1]
      result[nameKey] = value
      return result
    }, {})

    await prisma.slam.update({
      where: {
        id: parseInt(slamId)
      },
      data: {
        completedAt: new Date(),
        status: 'completed'
      }
    })

    await prisma.slamDetails.create(
      {
        data: {
          slam_id: parseInt(slamId),
          data: answers
        }
      }
    )

    // revalidatePath(`/panel`)
    redirect(`/panel`)
  }


  return (
    <div className="w-full">
      <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
        <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
          Responde las preguntas
        </p>
        <div className="mt-10 dark:text-white">
          <form action={answerSlam}>
            { slamQuestions.map(question => (
              <div className="flex flex-col justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12" key={question.id}>
                <p className="flex">
                  {question.id}.- { question.name }
                </p>
                <input type="text" name={`id[${question.id}]`} className="flex w-full px-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-sky-500" />
              </div>
            ))}

            <Button className="w-full">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SlamForm
