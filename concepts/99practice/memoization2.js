const memoization={}

function checkPrime(n){
    if(n in memoization){
        console.log('memoized value....')
        return memoization[n]
    }
    console.log('calculating...')
    memoization[n]= isPrime(n)
    return memoization[n]
}

function isPrime(n){
    if(n<1){
        return false
    }
    for(let i=2; i<= Math.sqrt(n); i++){
        if(n % i ===0){
            return false
        }
    }
    return true
}


console.log(checkPrime(47))
console.log(checkPrime(47))
console.log(checkPrime(47))
console.log(checkPrime(50))
console.log(checkPrime(50))