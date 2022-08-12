const arr2 = [1,2,3,4,[5,6,7]]
//==========================================================================================
const arr4 = JSON.parse(JSON.stringify(arr2))

console.log('initial',arr2)     //[ 1, 2, 3, 4, [ 5, 6, 7 ] ]
console.log('initial',arr4)     //[ 1, 2, 3, 4, [ 5, 6, 7 ] ]

arr4.push(9)
console.log('changed',arr4)     //[ 1, 2, 3, 4, [ 5, 6, 7 ], 9  ]
console.log('original',arr2)    //[ 1, 2, 3, 4, [ 5, 6, 7 ]]


arr4[4].push(100)
console.log('changed',arr4)     //[ 1, 2, 3, 4, [ 5, 6, 7, 100 ], 9 ]
console.log('original',arr2)    //[ 1, 2, 3, 4, [ 5, 6, 7 ]]


