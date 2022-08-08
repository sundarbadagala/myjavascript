function main(n){
    console.log('calculating.....')
    return n*10
}
// console.log(main(6))
// console.log(main(6))
// console.log(main(6))
//every time the operation is going on for the same value

const memoization={}

function main2(n){
    if(n in memoization){
        console.log('memoizing...')
        return memoization[n]
    }
    console.log('calculatin...')
    memoization[n] = n*10
    return memoization[n]
}
console.log(main2(6))
console.log(main2(6))
console.log(main2(6))