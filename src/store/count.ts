import { defineStore } from "pinia"

export const useCountStore = defineStore("count", {
  // 状态
  state: () => ({
    count: 0,
  }),
  // 同步
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  // 异步
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
})
