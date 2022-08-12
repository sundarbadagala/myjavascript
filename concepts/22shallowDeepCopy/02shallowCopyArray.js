const arr1=[1,2,3,4]
const arr2 = [1,2,3,4,[5,6,7]]

const arr3 = [...arr1]          //or Object.assign([], arr1)

arr3.push(5)
console.log('changed',arr3)     //[ 1, 2, 3, 4, 5 ]
console.log('original',arr1)    //[ 1, 2, 3, 4 ]
//==========================================================================================
const arr4 = [...arr2]          //or Object.assign([], arr2)

arr4[4].push(100)
console.log('changed',arr4)     //[ 1, 2, 3, 4, [ 5, 6, 7, 100 ]]
console.log('original',arr2)    //[ 1, 2, 3, 4, [ 5, 6, 7, 100 ] ] but it should be [ 1, 2, 3, 4, [ 5, 6, 7 ]]


//Note: Spread will work on normal arrays/objects but won't work on nested arrays/objects