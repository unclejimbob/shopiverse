import type { Product } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { title, description, image, category, price } = query

  let newProduct: Product | null = null

  try {
    newProduct = await prisma.product.create({
      data: {
        title,
        description,
        image,
        category,
        price: parseInt(price),
      },
    })
  }
  catch (err) {
    console.error(err)
    throw new Error('Failed to create product')
  }
  finally {
    await prisma.$disconnect()
  }

  return newProduct
})
