// 项目比较小，可以采用约定式路由 根据规范来创建目录
// 项目比较大，建议采用配置
import { createRouter, createWebHistory } from "vue-router"

const getRoutes = () => {
  const files = import.meta.glob("../views/*.vue") // 类似于webpack require.context

  return Object.entries(files).map(([file, module]) => {
    const name = file.match(/\.\.\/views\/([^.]+?)\.vue/i)?.[1]
    return {
      path: "/" + name,
      component: module
    }
  })
}

export default createRouter({
  history: createWebHistory(),
  routes: getRoutes()
  //   [
  //   {
  //     path: "/home",
  //     component: () => import("../views/home.vue")
  //   }
  // ]
})
