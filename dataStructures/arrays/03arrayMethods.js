const arr1 = [1, 2, 3, 4, 5];
const arr2 = [
  {
    name: "ram",
    age: 23,
  },
  {
    name: "raj",
    age: 11,
  },
  {
    name: "raghav",
    age: 90,
  },
  {
    name: "rambo",
    age: 1,
  },
];

//---------------------------------------------MAP------------------------------------
//01. This method CREATES NEW ARRAY from calling function for every element in the array
//02. This method calls a function once for each element in the array
//03. Doesn't change the original array

// arr2.map((item, index) => console.log(`map each ${index} : ${item.name}`));
const res4 = arr2.map((item, index) => `map array ${index}=${item.name}`);
const res6 = arr1.map(item => item%2 === 0)                                     //[ false, true, false, true, false ]
const res7 = arr1.map(item => item%2 === 0 ? 'event' : 'odd')                   //[ 'odd', 'event', 'odd', 'event', 'odd' ]

//------------------------------------------FOR EACH-----------------------------------
//01. This method calls a function for EACH ELEMENT in the array
//02. It doesn't return a new array like map methods
//02. This method doesn't execute for empty arrays

// arr2.forEach((item, index) => console.log(`for each ${index} : ${item.name}`));
const res3 = arr2.forEach((item, index) => `for each array ${index} = ${item.name}`);

//-------------------------------------------FILTER--------------------------------------
//01. RETURNS NEW ARRAY filled with elements that pass a test provied by function
//02. Doesn't change the original array

const res5 = arr1.filter(item => item%2 === 0)                  //[ 2, 4 ]
const res8 = arr1.filter(item => item%2 === 0 ? 'event':'odd')  //[ 1, 2, 3, 4, 5 ]


//-------------------------------------------EVERY--------------------------------------
//01. This method executes a function for each array element
//02. This method returns true if the function returns true for all elements
//03. This method returns false if the function returns false for one element
//04. This method doesn't change the original array

//output : all the elements should be number
const res1 = arr1.every((item) => typeof item === "number");

//output : all the elements below 4
const res2 = arr1.every((item) => item < 4);

//-------------------------------------------SOME--------------------------------------
//01. This method checks if any element in array that pass the test provieded by function
//02. Returns true if the function returns true for one element in the array
//03. Returns false if the function returns false for all the elements in the array
//04. Doesn't change the original array
const res9 = arr1.some(item => item < 3)
const res10 = arr1.some(item => item > 5)

//-------------------------------------------SOME--------------------------------------
//01. This executes a reducer function for array element.
//02. Returns single value, i.e the function accumulated result
//03. Doesn't change the original array

const res11 = arr1.reduce((total, current)=> total + current, 0) // 0 + 1 + 2 + 3 + 4 + 5 = 15
const res12 = arr1.reduce((t, c) => t+c, 5)                      // 5 + 1 + 2 + 3 + 4 + 5  = 20
const res13 = arr1.reduce((acc, cur)=> acc + Math.pow(cur, 2),0) // 0 + (1*1) + (2*2) + (3*3) + (4*4) + (5*5) = 55


console.log(res13)


