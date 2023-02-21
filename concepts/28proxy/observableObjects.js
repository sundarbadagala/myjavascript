function properties(obj, onChange){
    return new Proxy(obj, {
        get(taget, key){
            return Reflect.get(taget, key)
        },
        set(target, key, value){
            Reflect.set(target, key, value)
            onChange({key, value})
        }
    })
}

let person = {
    name : 'vijay',
    age:20
}

person = properties(person, ({key, value})=>{
    console.log(`${key}=>${value}`);
})


person.age = 30

// console.log(details.age);
// console.log(details.name);
// details.age = 90
// console.log(details.age);
// details.color = 'red'
// console.log(details.color);