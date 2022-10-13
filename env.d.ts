/// <reference types="vite/client" />
// vite 自带的三斜线指令
// 声明文件  告诉引入.vue 文件的类型是什么

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
