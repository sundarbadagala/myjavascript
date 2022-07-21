//Decimal to Binary
const binary = (n) =>{
    return n.toString(2)
}

//Binary to Decimal
const decimal=(n)=>{
    return parseInt(n,2)
}

console.log(binary(45))
console.log(decimal(101101))