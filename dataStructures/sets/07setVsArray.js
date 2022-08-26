//array accept duplicate values
//set doesn't accept duplicate values
const arr = new Array(1,2,3,1,2,1,2,2,1,3,3,5,4,1,1,3,4)
const set = new Set([1,2,3,1,2,1,2,2,1,3,3,5,4,1,1,3,4])
console.log(arr.length)
console.log(set.size)

//array can add new element both from start and end
//set can add element only from end
arr.push(100)   //from end
arr.unshift(99) //from start
set.add(100)    //from start only

//array can delete end element and start element
//set can't delete end element and start element

arr.pop()
arr.shift()

//array can delete particular element in that by slice mehtod
//set can delete particular element in that by delete method
const arr1 = ['a','b','c','d']
const set1 = new Set(['a','b','c','d'])

arr1.splice(1,1)
set1.delete('b')

//array can tell whether particular element present in that or not by icludes method
//set can tell whethre particular element present or not in that by has method
console.log(arr1.includes('a'))
console.log(set1.has('a'))

//array can clear by splice method
//set can clear by clear method

arr.splice(0, arr.length)
set1.clear()