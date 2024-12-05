<template>
  <div v-if="products" class="grid grid-cols-4 gap-4">
    <div v-for="product in products" :key="product.id">
      <Product :product="product" />
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch('/api/products')
</script>
