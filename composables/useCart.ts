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
    return cart.value.reduce((total, product) => total + product.price.toNumber(), 0)
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    calcTotalCart,
  }
}
