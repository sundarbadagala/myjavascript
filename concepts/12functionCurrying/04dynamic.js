function main(num){
    let sum = num
    function inner(nextNum){
        if(nextNum === undefined){
            return sum
        }
        sum += nextNum
        return inner
    }
    return inner
}

console.log(main(2)(3)(10)())