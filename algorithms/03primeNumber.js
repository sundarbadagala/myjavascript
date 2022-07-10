function isPrime (n){
    if(n<2) return false
    for(i=2; i<Math.sqrt(n); i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}

console.log('5',isPrime(5))
console.log('4',isPrime(4))
console.log('7',isPrime(7))
console.log('101',isPrime(101))
console.log('2',isPrime(2))
console.log('1',isPrime(1))
console.log('100',isPrime(100))

//Big-O notatin O(sqrt(n))