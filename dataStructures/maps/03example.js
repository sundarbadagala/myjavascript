//map can also use Object as a key

const res = {name:'vijay'}

const map = new Map()
map.set(res, 'available')
console.log(map)

const obj = new Object()
obj[res] = 'inside the object'
console.log(obj)