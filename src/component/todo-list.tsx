import { PropType } from "vue"

export default defineComponent({
  props: {
    list: {
      type: Array as PropType<string[]>,
      default: () => []
    }
  },
  render() {
    return (
      <ul class="bg-gray-3 w-50% m-auto mt-5">
        {this.list.map((todo, index) => {
          return <li key={index}>{todo}</li>
        })}
      </ul>
    )
  }
})
