<script setup lang="ts">
import Provider from "@/layout/Provider.vue"
</script>

<template>
  <Provider>
    <nav class="join join-horizontal mb-10 rounded border p-5">
      <router-link class="btn join-item px-5" to="/home">Home</router-link>
      <router-link class="btn join-item px-5" to="/about">About</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </Provider>
</template>

<style lang="scss">
main {
  @apply p-5 rounded border;
}
</style>
