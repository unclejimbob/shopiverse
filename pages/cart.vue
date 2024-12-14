<template>
  <div>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Product name
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Image
            </th>
          </tr>
        </thead>
        <tbody v-for="product in cart" v-if="cart">
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ product.title }}
            </th>
            <td class="px-6 py-4">
              ${{ Number(product.price).toFixed(2) }}
            </td>
            <td class="px-6 py-4">
              {{ product.category }}
            </td>
            <td class="px-6 py-4">
              <img width="50px" :src="product.image" alt="product image">
            </td>
            <td class="px-6 py-4">
              <button @click="removeFromCart(product)">
                <Icon
                  name="fa:remove"
                  size="25"
                  style="color: red"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <br><br>

      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Total
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          ${{ calcTotalCart().toFixed(2) }}
        </p>
        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="navigateToCheckout">
          Checkout
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { cart, removeFromCart, calcTotalCart } = useCart()
const navigateToCheckout = async () => {
  if (!cart.value.length) {
    alert('Cart is empty')
    return
  }
  await navigateTo('/checkout')
}
</script>
