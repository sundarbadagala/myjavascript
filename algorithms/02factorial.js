function factorial (n){
    let val = 1
    for(i=2; i<=n; i++){
        val *= i
    }
    return val
}

console.log(factorial(0))
console.log(factorial(1)) // 1
console.log(factorial(2)) // 1 * 2 = 2
console.log(factorial(3)) // 3 * 2 * 1 = 6
console.log(factorial(4)) // 4 * 3 * 2 * 1 = 24

//Big-O notation - O(n)