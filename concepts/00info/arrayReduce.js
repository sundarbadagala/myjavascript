const arr=['a','b','c','d']
arr.length = 5
console.log(arr);       //['a','b','c','d',<empty item>]
arr.length = 0
console.log(arr);          //[]