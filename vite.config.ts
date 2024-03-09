import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import { visualizer } from "rollup-plugin-visualizer" //打包体积分析
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import ElPlus from "unplugin-element-plus/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import progress from "vite-plugin-progress"
import colors from "picocolors"

export default defineConfig((config) => {
  const { mode } = config
  const env = loadEnv(mode, __dirname)
  return {
    plugins: [
      vue(),
      ElPlus({}),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        // 将 d.ts 文件生成在 src 目录下
        dts: "src/types/auto-imports.d.ts",
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        // 将 d.ts 文件生成在 src 目录下
        dts: "src/types/components.d.ts",
      }),
      visualizer({ open: true }),
      progress({
        format: `${colors.green(colors.bold("Bouilding"))} ${colors.cyan("[:bar]")} :percent`,
      }),
    ],
    base: env.VITE_MODE === "production" ? "./" : "/",
    build: {
      sourcemap: true,
      chunkSizeWarningLimit: 1000,
      minify: "terser", //压缩方式
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    proxy: {
      // "/api": {
      //   target: VITE_APP_PROXY,
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ""),
      // },
    },
    css: {
      // 全局样式配置
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/base.scss";`,
        },
        // less: {
        //   additionalData: `@import "@/assets/base.less";`,
        // },
      },
    },
  }
})
