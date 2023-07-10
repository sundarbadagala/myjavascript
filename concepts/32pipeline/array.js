import { pipeline } from './pipeline.js'

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 'a', 3, 4, 5]
const arr3 = [1, 2, 3, -4, 5, 6]

const checkstring = (arr) => {
    if (arr.every(item => typeof item === 'number')) {
        return arr
    } else {
        return 'Array contains strings'
    }
}
const checknegatives = (arr) => {
    if (arr.every(item => item >= 0)) {
        return arr
    } else {
        return 'Array contains negative values'
    }
}

const sum = (arr) => {
    return arr.reduce((acc, curr) => curr + acc)
}

//----------------------------------------------------------------------------

console.log(pipeline(arr1, checkstring, checknegatives, sum))
// console.log(pipeline(arr2, checkstring, checknegatives, sum))
// console.log(pipeline(arr3, checkstring, checknegatives, sum))
