import type { Product } from '@prisma/client'

export const useCart = () => {
  return useState<Product[]>('cart', () => [])
}
