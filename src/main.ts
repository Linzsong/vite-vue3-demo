import { createApp } from "vue"
// 引用.vue 文件时需要先声明这个.vue的类型
import App from "./App.vue"
import router from "./router"
import { login } from "./api/user"
import { createPinia } from "pinia"

createApp(App).use(router).use(createPinia()).mount("#app")
// eslint-disable-next-line no-constant-condition
// var a = 1
login<{ username: string; token: string }>({
  userName: "Jay",
  password: "jw"
})
  .then((res) => {
    console.log(res.data?.username)
  })
  .catch((err) => {
    console.log(err)
  })
