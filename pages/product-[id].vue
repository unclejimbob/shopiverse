<template>
  <div>
    <Loading v-if="status==='pending'" />
    <Product v-else :product="product" />
  </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
const { data: product, status } = await useFetch(() => {
  return `/api/products/find-product-by-id/${id}`
}, {
  lazy: true,
})
</script>
