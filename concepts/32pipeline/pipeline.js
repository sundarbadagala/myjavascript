export const pipeline1 = (...args) => args.reduce((acc, fn) => {
    try {
        return fn(acc)
    } catch (error) {
        return acc
    } j
})

export const pipeline2 = (...fns) => (val) => fns.reduce((prev, fn) => {
    try {
        return fn(prev)
    } catch (error) {
        return acc
    }
}, val)


export const pipeline3 = (...fns) => (value) => {
    fns.forEach(fn => value = fn(value))
    return value
}