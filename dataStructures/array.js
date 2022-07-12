//Array is the DS that can holds a collection of values
//Arrays can contain a mix of different data types. You can store strings, booleans, numbers or even Objects all in the same array
//Arrays are resizable. You don't have to declare the size of array before creating
//JS arrays are zero indexed and the insertion order is maintained
//Arrays are iterable, they can be used with for of loop

const arr = [1, 2, 3, "ram"];

// add an element at end
arr.push("bheem"); //[1,2,3,'ram','bheem']

//add an element at begin
arr.unshift("a"); //['a',1,2,3,'ram','bheem']

//remove an element at end
arr.pop("a"); //['a',1,2,3,'ram']

//remove an element at begin
arr.shift("a"); //[1,2,3,'ram','bheem']


//map, methods *
console.log(arr);
