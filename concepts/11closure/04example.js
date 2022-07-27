const add=(()=>{
    let count = 0
    return (n)=>{
        count = count + n
        return count
    }
})()

console.log(add(3))     //count = 0 = 0 + 3  => 3
console.log(add(10))    //count = 3 = 3 + 10 => 13
console.log(add(6))     //count = 13 = 13 + 6 => 19