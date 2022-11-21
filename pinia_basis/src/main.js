import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from '@/pinia'

// 创建一个pinia(根存储)并将其传递给应用程序
createApp(App).use(createPinia()).mount('#app')
