import { Button } from '../ui/button'
import { prisma } from '@/lib/db'
import { Question } from '@prisma/client'
import { redirect } from 'next/navigation'

const getSlamQuestions = async (): Promise<Question[]> => {
  const questions: Question[] = await prisma.question.findMany()

  return questions
}

interface SlamFormProps {
  slamId: number
}

const SlamForm = async ({ slamId }: SlamFormProps) => {
  const slamQuestions = await getSlamQuestions()

  const answerSlam = async (formData: FormData) => {
    'use server'

    const answers: { [key: string]: string } = Array
      .from(formData.entries())
      .filter(([key]) => key.startsWith('id['))
      .reduce((result, [key, value]) => {
        const matchResult = key.match(/\[(\d+)\]/)
        if (matchResult && matchResult[1]) {
          const nameKey = matchResult[1]
          result[nameKey] = value.toString()
        }
        return result;
      }, {} as { [key: string]: string })

    await prisma.slam.update({
      where: {
        id: slamId
      },
      data: {
        completedAt: new Date(),
        status: 'completed'
      }
    })

    await prisma.slamDetails.create(
      {
        data: {
          slam_id: slamId,
          data: answers
        }
      }
    )

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
            { slamQuestions.map(({ id, name }: { id: number, name: string }) => (
              <div className="flex flex-col justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12" key={ id }>
                <p className="flex">
                  { id }.- { name }
                </p>
                <input type="text" name={`id[${id}]`} className="flex w-full px-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-sky-500" />
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
