const person = {
    name:'raj'
}

function main(age, color){
    return `${this.name}:${age}-${color}`
}

console.log(main.apply(person, [34, 'blue']))
// -----------------------------------------------------

Function.prototype.myApply = function(context={}, args = []){
    context.fn = this
    const res = context.fn(...args)
    delete context.fn
    return res
}

console.log(main.myApply(person, [24, 'yellow']))