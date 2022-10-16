import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue" // 解析 .vue 文件
import AutoImport from "unplugin-auto-import/vite"
import path from "path"
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ imports: ["vue", "vue-router"], eslintrc: { enabled: false } })
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
  }
})
