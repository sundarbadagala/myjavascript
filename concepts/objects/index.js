const obj = {
    name:'ram',
    age:23
}

obj.name = 'raj'
Object.seal(obj)
obj.name = 'raghav'
console.log(obj)