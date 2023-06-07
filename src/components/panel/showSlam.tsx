import { prisma } from '@/lib/db'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

const getSlamQuestions = async () => {
  const questions = await prisma.question.findMany()

  return questions
}

const getSlamDetails = async ({ slamId }) => {
  const details = await prisma.slamDetails.findFirst({
    where: {
      slam_id: parseInt(slamId)
    },
    include: {
      slam: {
        include: {
          user: true
        }
      }
    }
  })

  return details
}

const ShowSlam = async ({ slamId }) => {
  const slamQuestions = await getSlamQuestions()
  const slamDetails = await getSlamDetails({ slamId })

  const slamAnswers = slamDetails?.data

  return (
    <div className="w-full">
      <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
        <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
          Slam de { slamDetails?.slam.user.name }
        </p>
        <p className="text-sm font-semibold text-gray-700 w-max dark:text-white">
          { dayjs(slamDetails?.createdAt.toString()).locale('es').format('dddd, D MMMM YYYY hh:mmA') }
        </p>
        <div className="mt-10 dark:text-white">
          { slamQuestions.map(question => (
            <div className="flex flex-col justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12" key={question.id}>
              <p className="flex">
                {question.id}.- { question.name }
              </p>
              { slamAnswers && slamAnswers[question.id] && (
                <p className="flex">
                  { slamAnswers[question.id] }
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
