const a = {x:3, y:4}
const b = a
const c = {...a}
a.x = 100
console.log(a)
console.log(b)
console.log(c)