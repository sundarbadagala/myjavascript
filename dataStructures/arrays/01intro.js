//An array is DS that can hold a collection of values
//Arrays can contain a mix of data types. You can store strings, booleans, numbers or even objects all in the same array
//Arrays are resizable
//Arrays are zero ordered and insertion order is maintained
//Arrays are iterable

const arr1 = [6,2,43,1,34,1,'s','i',32,'r']

//iterate array
for(const item of arr1){
    //console.log(item)       //return elements
}

for(const item in arr1){
    //console.log(item)       //return index of elements
}

//Add element at last
arr1.push(100)

//Delete element at last
arr1.pop()

//Add el at beginning
arr1.unshift('zero')

//Delete element at beginning
arr1.shift()

//First element in the array
console.log('first element', arr1[0])

//Last element in the array
console.log('last element', arr1[arr1.length-1])