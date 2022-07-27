//Arrow functions are been introduced in the ES6 version of JavaScript. 
//It is used to shorten the code. 
//Here we do not use the “function” keyword and use the arrow symbol.

const main=()=>{
    return 'hello world'
}

const main2 = () => 'hello world'

console.log(main())
console.log(main2())

const add = (a,b)=> a+b

console.log(add(4,3))

const isEven = (n)=> {
    if(n%2 === 0) return 'even'
    return 'odd'
}
console.log(isEven(4))
console.log(isEven(7))
