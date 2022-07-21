const n1 = 989981
const n2 = 852987492

const ascendingOrder = (n) => {
    return n.toString().split('').sort().join('')   // O(1) + O(n) + O(n.log(n)) + O(n) => O(3n.log(n))
}

const descendingOrder = (n) =>{
    return n.toString().split('').sort().reverse().join('') // O(1) + O(n) + O(n.log(n)) + O(n) + O(n) => O(4n.log(n))
}

console.log(ascendingOrder(n1))
console.log(descendingOrder(n1))

console.log(ascendingOrder(n2))
console.log(descendingOrder(n2))