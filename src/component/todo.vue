<template>
  <div>
    <input type="text" v-model="todo" />
    <button @click="addTodo">添加</button>

    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
let todo = ref("")
let list = ref<string[]>([])

const addTodo = () => {
  if (todo.value) {
    list.value.push(todo.value)
  }
}
</script>

<style scoped></style>
