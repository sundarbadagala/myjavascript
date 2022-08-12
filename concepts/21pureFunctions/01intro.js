//Pure functions are the part of the functional programming paradigm

//===========Benefits===========
//01 Clean code
//02 Easy to test
//03 Easy to debug
//04 These are independent and decoupled
//05 Could be added to your utility functions

//===========Rules for the Pure functions============
//01 The same input always gives the same output
//02 No side effects
//03 Should have atleast one parameter
//04 Accessing values outside the scope makes function impure
//05 Can't access database, API, file system, storage etc
//06 Can't modify the DOM
//07 No input state can be modified
//08 No data should be "mutated"
//09 Always returns something

//=====================================can't access outside the scope===============================
const pureFn = (a, b) => {
  return a + b;
};
console.log(pureFn(3, 4));              //7

let num1 = 8;
const impureFn = (a, b) => {
  return a + b + num1;
};
console.log(impureFn(3, 4));            //15
//=====================================no input state can be modified===============================

let num2 = 9;
const impureIncrementFn = () => {
  return (num2 += 1);
};
console.log(impureIncrementFn());       //10
console.log(num2);                      //10

let num3 = 9;
const pureIncrementFn = (a) => {
  return (a += 1);
};
console.log(pureIncrementFn(9));        //10
console.log(num3);                      //9

//=====================================no input state can be modified===============================

const arr1 = [1, 2, 3];
const impureAddFn = (arr, el) => {
    arr.push(el)
    return arr
};
console.log(impureAddFn(arr1,4));       //[ 1, 2, 3, 4 ]
console.log(arr1)                       //[ 1, 2, 3, 4 ]

const arr2 = [1,2,3]
const pureAddFn=(arr, el)=>{
    return [...arr, el]
}
console.log(pureAddFn(arr2, 4))         //[ 1, 2, 3, 4 ]
console.log(arr2)                       //[ 1, 2, 3]
