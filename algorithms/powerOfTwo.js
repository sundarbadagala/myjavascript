//-----------------------------------------------for loop---------------------------------------------------------------
function powerOfTwo (n){
    for(let i=0; i<n; i++){
        if(2**i === n){
            return `2^${i}`
        }
    }
    return false
}                           // Big-O notation - O(n)
//-----------------------------------------------while loop---------------------------------------------------------------
function powerOfTwo2(n){
    let i=0
    while(i<n){
        if(2**i === n){
            return true
        }
        i++
    }
    return false
}                           // Big-O notation - O(n)
//-----------------------------------------------time complexity---------------------------------------------------------------
function powerOfTwo3 (n){
    if(n<1) return false
    while(n>1){
        if(n%2 !== 0){
            return false
        }
        n = n/2
    }
    return true
}                           // Big-O notation - O(log(n))    // size reduced by half
//-----------------------------------------------time complexity---------------------------------------------------------------
function powerOfTwo4 (n){
    if(n<1) return false
    return (n & (n-1)) === 0
}                           // Big-O notation - O(1)


console.log('0',powerOfTwo4(0))
console.log('1',powerOfTwo4(1))
console.log('2',powerOfTwo4(2))
console.log('3',powerOfTwo4(3))
console.log('4',powerOfTwo4(4))
console.log('5',powerOfTwo4(5))
console.log('8',powerOfTwo4(8))
console.log('10',powerOfTwo4(10))
console.log('16',powerOfTwo4(16))
console.log('17',powerOfTwo4(17))