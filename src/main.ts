import { createApp } from "vue"
// 引用.vue 文件时需要先声明这个.vue的类型
import App from "./App.vue"
import router from "./router"
createApp(App).use(router).mount("#app")
import { login } from "./api/user"

// eslint-disable-next-line no-constant-condition
// var a = 1
login<{ username: string; token: string }>({
  userName: "hello 123",
  password: "jw"
})
  .then((res) => {
    console.log(res.data?.username)
  })
  .catch((err) => {
    console.log(err)
  })
