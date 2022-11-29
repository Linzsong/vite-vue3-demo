<template>
  <div>about</div>
  <div>
    <span>用户名称：</span>
    <span>{{ store.userName }}</span>
  </div>
  <div>
    <span>年龄：</span>
    <span>{{ store.years }}</span>
  </div>
  <div>
    <span>年龄*2：</span>
    <span>{{ store.doubleYears }}</span>
  </div>
  <div>
    <input type="text" v-model="userName" />
    <button @click="setName">设置名称</button>
  </div>
  <div>
    <input type="text" v-model="num" />
    <button @click="setYears">添加岁数</button>
  </div>
</template>
<script setup lang="ts">
import { userDataStore } from "@/store/index"
const store = userDataStore()

const userName = ref("")
const setName = () => {
  store.changeName(userName.value)
  userName.value = ""
}

const num = ref(0)
const setYears = () => {
  store.setYears(num.value).then((res) => {
    console.log(res)
  })
}
</script>
