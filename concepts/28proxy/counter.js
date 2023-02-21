const counts = {
    increment: true,
    decrement: true
}

let count = 0

const counter = new Proxy(counts, {
    get(target, key) {
        if (key === 'increment' && target[key]) count++
        if (key === 'decrement' && target[key]) count--
        return target[key]
    },
    set(target, key, value){
        if(['increment', 'decrement'].indexOf(key) === -1){
            throw new Error('invalid value')
        }
        target[key] = value
        return String(value)
    }
})

counter.increment
counter.increment
counter.increment
console.log(count);
counter.decrement
counter.decrement
console.log(count);
counter.increment = false
counter.increment
counter.increment
counter.increment
console.log(count)
counter.decrement
counter.decrement
console.log(count)
counter.increment = true
counter.increment
console.log(count)


