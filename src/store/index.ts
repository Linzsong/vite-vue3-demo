import { defineStore } from "pinia"
import { computed } from "vue"
export const userDataStore = defineStore("user", () => {
  const userName = ref("")
  const years = ref(0)
  const doubleYears = computed(() => {
    return years.value * 2
  })
  const changeName = (payload: string) => {
    userName.value = payload
  }
  const setYears = (payload: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        years.value += payload
        resolve("success")
      }, 500)
    })
  }
  return { userName, years, doubleYears, changeName, setYears }
})
