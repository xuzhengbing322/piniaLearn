<template>
  <div>
      <input 
        type="text"
        placeholder="Please input something..."
        v-model="inputRef"
      />
      <button @click="addTodo">Add Todo</button>
  </div>
</template>

<script  setup >
    import {ref} from 'vue'
    import {useTodoListStore} from '@/store/index'
    
    const todoListStore = useTodoListStore()

    const inputRef = ref('')
    const addTodo = () => {
         todoListStore.addTodo(inputRef.value)
         inputRef.value = ''
    }
</script>

<style lang='less' scoped>
</style>