<template>
  <div>
    <PublicNav v-if="!user" />
    <UserNav v-else />
  </div>
</template>

<script lang="ts" setup>
import PublicNav from "./PublicNav.vue";

const user = useSupabaseUser();
</script>

<style></style>
