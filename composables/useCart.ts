import type { Product } from '@prisma/client'

export const useCart = () => {
  const cart = useState<Product[]>('cart', () => [])

  const addToCart = (product: Product) => {
    cart.value.push(product)
  }

  const removeFromCart = (product: Product) => {
    const productIndex = cart.value.findIndex(item => item.id === product.id)
    if (productIndex !== -1) {
      cart.value.splice(productIndex, 1)
    }
  }

  const calcTotalCart = () => {
    let total = 0
    cart.value.forEach((product) => {
      total += Number(product.price)
    })

    return total.toFixed(2)
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    calcTotalCart,
  }
}
