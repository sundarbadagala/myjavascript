const add = (function(){
    let count = 0
    return function(){
        count ++
        return count
    }
})()

console.log(add())
console.log(add())
console.log(add())
//=========================================================================
const add2 = (()=>{
    let count = 0
    return ()=>{
        count ++
        return count
    }
})()
console.log(add2())
console.log(add2())
console.log(add2())