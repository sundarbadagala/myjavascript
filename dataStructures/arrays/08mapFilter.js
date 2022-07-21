const arr1 = [1,4,2,4,6,3,1,2,33,12,1,56,32,12]

const res1 = arr1.map(item => item)
const res2 = arr1.filter(item => item)

const res3 = arr1.map(item => item < 10)
const res4 = arr1.filter(item => item < 10)
const res5 = arr1.map(item => item < 10 && item)

const res8 = arr1.map(item => item < 10 ? 'a' : 'b')
const res9 = arr1.filter(item => item < 10 ? 'a' : 'b')

console.log(res9)

//==================================================
//MAP => should return all elements, if the condition fails then it returns false
//FILTER => should return elements only which pass the condition

//MAP => manipulat the array and returns new values by using condition
//FILTER => can't manipulate the array