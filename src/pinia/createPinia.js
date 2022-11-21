// 因为main.js要use(createPinia())，所以createPinia.js要暴露返回{install(app){}}
import { reactive } from "vue"
import {patch} from './apis'

export default () => {
    const piniaStore = reactive({})

    // setSubStore用于将子仓库添加到piniaStore中。name就是子仓库的key，store就是子仓库的value
    function setSubStore (name, store) {
        // 判断piniaStore中是否存在name。如果不存在，就把store赋给 piniaStore[name]
        if(!piniaStore[name]){
            piniaStore[name] = store;
            piniaStore[name].$patch = patch;
        }

        return piniaStore

    }

    function install (app) {
        /*piniaStore就是根仓库。
        逻辑上讲：defineStore会生成子仓库，并放在piniaStore当中。即用对象的形式将defineStore生成的子仓库存放在piniaStore中
        */ 


        // 使用app上的provide，将setSubStore方法抛出去，key为setSubStore，value是setSubStore
        app.provide('setSubStore',setSubStore)
    }

    return {
        install
    }
}

