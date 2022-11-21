<template>
  <div>
    <a 
      href="javascript:;" 
      @click="setFilter('all')"
      :class="{active:todoListStore.filter === 'all'}"
    >All</a>
    <a 
      href="javascript:;"  
      @click="setFilter('finished')"
      :class="{active:todoListStore.filter === 'finished'}"
    >Finished</a>
    <a 
      href="javascript:;" 
      @click="setFilter('unfinished')"
      :class="{active:todoListStore.filter === 'unfinished'}"
    >Unfinished</a>
  </div>
</template>

<script setup>
    import {useTodoListStore} from '@/store/index'

    const todoListStore = useTodoListStore()

    // $patch(filter:filter)：修改todoListStore中的filter属性，修改值为filter参数
    const setFilter = (filter) => {
        todoListStore.$patch({filter:filter})
    }

</script>

<style lang="less" scoped>
.active{
    text-decoration: none;
    color: #000;
}

a{
    margin-right: 15px;
}
</style>