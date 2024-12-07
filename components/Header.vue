<template>
  <div>
    <PublicNav v-if="!user" />
    <UserNav v-else />
  </div>
</template>

<script lang="ts" setup>
const user = useSupabaseUser()
</script>
