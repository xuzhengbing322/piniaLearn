// 子仓库中有一些api:patch
export function patch (value) {
    // patch是子仓库的api，所以this应该是指向store的
    const store = this

    for (let key in value) {
        store[key] = value[key]
    } 
}