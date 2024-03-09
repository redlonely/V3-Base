<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { useCountStore } from "@/store/count"

const { count, doubleCount } = storeToRefs(useCountStore())
const { increment, decrement } = useCountStore()
</script>

<template>
  <div class="Home">
    <h2>Home</h2>
    <div class="mt-5 flex flex-wrap gap-5 rounded border p-5">
      <button class="btn btn-neutral px-10">{{ count }}</button>
      <button class="btn btn-neutral px-10">{{ doubleCount }}</button>
      <button class="btn btn-neutral px-10" @click="increment">增加</button>
      <button class="btn btn-neutral px-10" @click="decrement">减少</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
