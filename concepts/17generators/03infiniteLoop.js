function* generateId(){
    let id = 1
    while(true){
        yield id
        id++
    }
} 

const id = generateId()

console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());