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
        />
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
          <h5
            class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            {{ product.description }}
          </h5>
        </NuxtLink>
        <div class="flex items-center mt-2.5 mb-5">
          <h5>Rating:</h5>
          <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3"
            >{{ getRandomRating() }}</span
          >
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white"
            >${{ product.price }}</span
          >
          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="addToCart(product)"            
          >
            <span
              v-if="alreadyInCart(cart, product)"
              class="text-3xl font-bold text-gray-900 dark:text-white"
              >Item added</span
            >
            <span
              v-else
              class="text-3xl font-bold text-gray-900 dark:text-white"
              >Add to cart</span
            >
          </button>
          <span
            class="text-3xl font-bold text-gray-900 dark:text-white line-through"
            >{{ product.price * 2 }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Product } from "#build/components";

defineProps(["product"]);

const user = useSupabaseUser();
const cart = useCart();

const addToCart = (product) => {
  if (user.value) {
    cart.value.push(product);
  } else {
    alert("Login to start adding products to cart");
  }
};

const getRandomRating = () => Math.floor(Math.random() * 5) + 1;

const alreadyInCart = (cartState, productToCheck) => {
  return cartState.some((productInCart) => {
    return productInCart.id === productToCheck.id;
  });
};
</script>

<style></style>
