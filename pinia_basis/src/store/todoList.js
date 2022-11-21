import {
  defineStore
} from '@/pinia'

// defineStore()创建pinia仓库，main是自定义的仓库名
export default defineStore('todoList', {
  // 存放仓库的数据
  state: () => ({
    todos: [],
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    filter: 'all',
    /** @type {'all' | 'finished' | 'unfinished'} */
    nextId: 0 // type will be automatically inferred to number
  }),

  // 操作state中的属性
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text) {
      // you can directly mutate the state
      this.todos.push({
        id: this.nextId++,
        text: text,
        isFinished: false
      })
    },
    // 改变todo的isFinished参数。
    toggleTodo(id) {
      this.todos = this.todos.map(todo => {
        if (todo.id === id) {
          todo.isFinished = !todo.isFinishied
        }

        return todo
      })
    },
    removeTode(id) {
    //   console.log(this); //??这里的this指代什么，为什么要用this。this应该是指代state
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  },

  // 它类似于计算属性，计算state中的属性。计算出来的属性依旧存放在state中。
  getters: {
    // 状态为成功的todo
    finishedTodos(state) {
      return state.todos.filter(todo => todo.isFinished)
    },
    // 状态为失败的todo
    unfinishedTodos(state) {
      return state.todos.filter(todo => !todo.isFinished)
    },
    // 经过计算后的todos
    filteredTodes(state) {
      switch (this.filter) {
        case 'finished':
          return this.finishedTodos;
        case 'unfinished':
          return this.unfinishedTodos;
        default:
          return this.todos
      }
    }


  }
})
