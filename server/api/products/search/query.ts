import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const queryItem = query.input

  if (!queryItem || typeof queryItem !== 'string') {
    return [] // No query item so return an empty array
  }

  const items = await prisma.product.findMany({
    where: {
      OR: [
        {
          title: {
            contains: queryItem,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: queryItem,
            mode: 'insensitive',
          },
        },
      ],
    },
  })

  return items
})
