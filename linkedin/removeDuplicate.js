const a = [1, 2, 3, 4, 5]
const b = [4, 2, 6, 8, 9]

const removeDuplicates = (a, b) => a.filter(item => !b.includes(item))

console.log(removeDuplicates(a, b))
console.log(removeDuplicates(b, a))