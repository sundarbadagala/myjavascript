function properties(obj){
    return new Proxy(obj, {
        get(taget, key){
            return Reflect.get(taget, key)
        },
        set(target, key, value){
            return Reflect.set(target, key, value)
        }
    })
}

const person = {
    name : 'vijay',
    age:20
}

const details = properties(person)

console.log(details.age);
console.log(details.name);
details.age = 90
console.log(details.age);
details.color = 'red'
console.log(details.color);

console.log(details);