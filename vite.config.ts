/// <reference types="vitest" />
import { defineConfig } from "vite"
import { viteMockServe } from "vite-plugin-mock"
import vue from "@vitejs/plugin-vue" // 解析 .vue 文件
import AutoImport from "unplugin-auto-import/vite"
import path from "path"
import jsx from "@vitejs/plugin-vue-jsx"
export default defineConfig({
  plugins: [
    viteMockServe(),
    vue(),
    jsx(),
    AutoImport({
      imports: ["vue", "vue-router"]
      // eslintrc: { enabled: false }
    })
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
  },
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/.tsx$/]
    }
  }
  // 代理设置
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3000",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, "")
  //     }
  //   }
  // }
})
