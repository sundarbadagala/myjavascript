const arr1 = [1,2,3,4,5,6,7]
const arr2 = [1,2,3]

console.log(arr2.map(item => `log external ${item}`))
arr2.map(item => console.log(`log internal ${item}`))
const res1 = arr2.map(item => `map iterate ${item}`)
console.log(res1)

console.log(arr2.forEach(item => `log external ${item}`))
arr2.forEach(item => console.log(`log internal ${item}`))
const res2 = arr2.forEach(item => item)
console.log(res2)

//========================================================================
//MAP => returns new array with from calling function for every element in the array
//FILTER => doesn't return new array, but calls function for each element in the array