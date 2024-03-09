import { createRouter, createWebHistory } from "vue-router"

// 根路由
import routes from "./routes/root"

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
