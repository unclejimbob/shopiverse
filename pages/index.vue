<template>
  <div class="grid grid-cols2 gap-4">
    <div v-if="products" v-for="product in products">
      <Product :product="product" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: products } = await useFetch("/api/products");
</script>

<style></style>
