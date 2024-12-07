<template>
  <div :id="`product${product.id}`">
    <div
      class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <NuxtLink :to="`product-${product.id}`">
        <img
          class="p-8 rounded-t-lg"
          :src="`${product.image}`"
          alt="product image"
        >
      </NuxtLink>
      <div class="px-5 pb-5">
        <NuxtLink :to="`product-${product.id}`">
          <h5
            class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            {{ product.title }}
          </h5>
        </NuxtLink>
        <NuxtLink :to="`product-${product.id}`">
          <p class="mb-3 text-gray-500 dark:text-gray-400 truncate">
            {{ product.description }}
          </p>
        </NuxtLink>
        <div class="flex items-center mt-2.5 mb-5">
          <h5 class="text-black dark:text-white">
            Rating:
          </h5>
          <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3"
          >{{ getRandomRating() }}</span>
        </div>
        <div class="flex items-center justify-between">
          <span
            class="text-3xl font-bold text-gray-900 dark:text-white line-through"
          >${{ Number(product.price) * 2 }}</span>
          <span class="text-3xl font-bold text-gray-900 dark:text-white">${{ product.price }}</span>
          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="addToCart(product)"
          >
            <span v-if="alreadyInCart(cart, product) && user">Item added</span>
            <span v-else>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from '@prisma/client'

const props = defineProps<{ product: Product }>()

const user = useSupabaseUser()
const cart = useCart()

const alreadyInCart = (cartState: Product[], productToCheck: Product): boolean => {
  return cartState.some((productInCart) => {
    return productInCart.id === productToCheck.id
  })
}

const getRandomRating = () => Math.floor(Math.random() * 5) + 1

const addToCart = (product: Product) => {
  if (user.value) {
    cart.value.push(product)
  }
  else {
    alert('Login to start adding products to cart')
  }
}
</script>

<style></style>
