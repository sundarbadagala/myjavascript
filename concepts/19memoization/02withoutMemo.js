//without memoization
const squareFn = (n)=>{
    let count =0
    for(let i=1; i<=n;i++){
        for(let j=1; j<=n;j++){
            count++
        }
    }
    return count
}

console.time()
console.log(squareFn(30000))
console.timeEnd()

console.time()
console.log(squareFn(30000))
console.timeEnd()

console.time()
console.log(squareFn(40000))
console.timeEnd()

console.time()
console.log(squareFn(30000))
console.timeEnd()

console.time()
console.log(squareFn(40000))
console.timeEnd()

console.time()
console.log(squareFn(40000))
console.timeEnd()
