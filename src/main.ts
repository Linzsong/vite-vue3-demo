import { createApp } from "vue"
// 引用.vue 文件时需要先声明这个.vue的类型
import App from "./App.vue"
createApp(App).mount("#app")

console.log(12)
const a = 1
if (a) {
  const ab = 1
}
// eslint-disable-next-line no-constant-condition
// var a = 1
