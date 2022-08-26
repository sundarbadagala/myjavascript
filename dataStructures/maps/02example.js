const map = new Map()

map.set(1, 'hello')
map.set('1', 'world')
map.set(true, 'it is true')

console.log(map.get(1))

map.set(1, 'hi')
console.log(map.get(1))

console.log(map.size)




