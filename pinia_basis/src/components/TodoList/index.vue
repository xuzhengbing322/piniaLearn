<template>
  <div>
    <todo-tab></todo-tab>
    <todo-form></todo-form>
    <todos></todos>
  </div>
</template>

<script setup >
import TodoTab from './TodoTab'
import TodoForm from './TodoForm'
import Todos from './Todos'



import { useTodoListStore } from "@/store/index";
// 调用useTodoListStore()得到todoList仓库，并赋给变量todoListStore
const todoListStore = useTodoListStore();


</script>

<style lang="ts" scoped>
</style>