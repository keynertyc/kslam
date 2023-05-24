import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const questionsSeedData = [
  { name: '¿Cuál es tu nombre completo?' },
  { name: '¿Cuál es tu signo zodiacal?' },
  { name: '¿Tienes algún apodo?' },
  { name: '¿Cómo te consideras?' },
  { name: '¿Cuál es tu color preferido?' },
  { name: '¿En qué colegio estudias?' },
  { name: '¿Cuál es el curso que más te gusta?' },
  { name: '¿Quién te gusta? Pon solo tres letras' },
  { name: '¿Eres virgen de labios?' },
  { name: '¿Qué país te gustaría conocer?' },
  { name: '¿Cuál fue el día más feliz de tu vida?' },
  { name: '¿Tienes un amor imposible?' },
  { name: '¿Cuál es el nombre de tu amor platónico?' },
  { name: '¿Eres celosa o celoso?' },
  { name: '¿Cuál es la canción que te hace llorar?' },
  { name: '¿Existe un lugar favorito para que te besen?' },
  { name: '¿Crees en el amor a primera vista?' },
  { name: '¿Estás enamorado?' },
  { name: '¿Quién fue tu primer amor?' },
  { name: 'Escribe la primera letra del nombre de la persona que no te cae' },
  { name: 'Déjame un recuerdo' }
]

async function main() {

  // Question
  for (const questionData of questionsSeedData) {
    await prisma.question.create({ data: questionData })
  }
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
