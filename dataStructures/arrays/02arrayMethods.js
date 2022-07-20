const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 3];

//--------------------------SLICE METHOD------------------------------
//01. This method returns selected elements from an array as a new array
//02. This method selects from a given start, up to given end (not inclusive)
//03. This method doesn't change original array

// output : [1,2,3]
const res1 = arr1.slice(0, 3);

//output : [6,7,8]
const res2 = arr1.slice(5);

//output : [4,5,6]
const res3 = arr1.slice(3, 6);

//output : all elements except first one
const res4 = arr1.slice(1);

//output : all elements except last one
const res5 = arr1.slice(0, arr1.length - 1);

//--------------------------SPLICE METHOD------------------------------
//01. This method add and/or removes array elements
//02. This method overwrites the original array

//output : [1,2,3,6,7,8]
arr1.splice(3,2)

//output : [1,8] => only first and last elements in the array
arr1.splice(1, arr1.length-2)

//output :[1,2,3] -> [1,2,'two',3] => add 'two' i/b 2 and 3
arr2.splice(2, 0, "two"); 

//output : [1,2,3] -> [1,2,'three'] => add 'three' in place of 3 => replace 3 with 'three'
arr3.splice(2, 1, "three");

//output : [1,2,'three'] -> ['one', 'three']
arr3.splice(0,2, 'one')

console.log(arr1)
