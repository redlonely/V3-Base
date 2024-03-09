import type { RouteRecordRaw } from "vue-router"

import Home from "@/views/Home.vue"
import About from "@/views/About.vue"

const RootRoute: RouteRecordRaw[] = [
  { path: "/", redirect: "/home" },
  {
    name: "home",
    path: "/home",
    meta: {
      title: "主页",
      auth: false,
    },
    component: Home,
  },
  {
    name: "about",
    path: "/about",
    meta: {
      title: "动态",
      auth: false,
    },
    component: About,
  },
]

export default RootRoute
