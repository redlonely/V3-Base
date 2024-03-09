import "./assets/styles/taliwind.scss"
import { createApp } from "vue"
import { autoAnimatePlugin } from "@formkit/auto-animate/vue"
import App from "./App.vue"
import router from "@/router"
import store from '@/store'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(autoAnimatePlugin)
app.mount("#app")
