function factorial(n){
    if(n === 0){
        return 1
    }
    return n * factorial(n-1)
}

// BigO - O(n)

console.log(factorial(3))