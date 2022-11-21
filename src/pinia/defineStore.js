import { reactive,toRef,inject, computed } from "vue";

export default (
    name,
    {
        state, //function
        getters,
        actions
    }
) => {
    const store = {};

    if (state && typeof state === 'function') {
        const _state = state();
        store.$state = reactive(_state);

        // 把_state的属性都放在store中。
        for (let key in _state) {
            // 将store.$state上面的属性拿给key
            store[key] = toRef(store.$state, key)
        }
    }

    if (actions && Object.keys(actions).length > 0) {
        for (let method in actions) {
            store[method] = actions[method];
        }
    }

    if (getters && Object.keys(getters).length > 0) {
        for (let getter in getters) {
            // bind更改this指向store，并且给它传一个参数
            store[getter] = computed(getters[getter].bind(store.$state,store.$state));
            store.$state[getter] = store[getter];
        }
    }

    return () => {
        const setSubStore = inject('setSubStore');
        const piniaStore = setSubStore(name, reactive(store))

        return piniaStore[name]; 
    }

}