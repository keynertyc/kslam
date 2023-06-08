import { prisma } from '@/lib/db'
import { Question, SlamDetails, Slam, User } from '@prisma/client'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

const getSlamQuestions = async (): Promise<Question[]> => {
  const questions: Question[] = await prisma.question.findMany()

  return questions
}

const getSlamDetails = async (slamId: number): Promise<ISlamDetailsWithRelations> => {
  const details = await prisma.slamDetails.findFirst({
    where: {
      slam_id: slamId
    },
    include: {
      slam: {
        include: {
          user: true
        }
      }
    }
  })

  if (!details) {
    throw new Error(`Slam details not found for slamId: ${slamId}`);
  }

  return details as ISlamDetailsWithRelations
}

interface ShowSlamProps {
  slamId: number
}

const ShowSlam = async ({ slamId }: ShowSlamProps) => {
  const slamQuestions: Question[] = await getSlamQuestions()
  const slamDetails = await getSlamDetails(slamId)

  const slamAnswers: ISlamAnswers = slamDetails.data as ISlamAnswers

  return (
    <div className="w-full">
      <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
        <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
          Completado por { slamDetails.slam.user.name }
        </p>
        <p className="text-sm font-semibold text-gray-700 w-max dark:text-white">
          { dayjs(slamDetails.createdAt.toString()).locale('es').format('dddd, D MMMM YYYY hh:mmA') }
        </p>
        <div className="mt-10 dark:text-white">
          { slamQuestions.map(({ id, name }: { id: number, name: string })  => (
            <div className="flex flex-col justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12" key={id}>
              <p className="flex">
                {id}.- { name }
              </p>
              { slamAnswers && slamAnswers[id] && (
                <p className="flex">
                  { slamAnswers[id] }
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShowSlam
