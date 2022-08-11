//decorators wrap a function in another function
//and these wrappers decorate the original function with new capabilities
//Benefits : D.R.Y and clean code through composition


//Decorating in programming is simply wrapping one piece of code with another, thereby decorating it. 
//A decorator (also known as a decorator function) can additionally refer to the design pattern that wraps a function with another function to extend its functionality.

//Function decorators are functions. 
//They take a function as an argument and return a new function that enhances the function argument without modifying it.
//======================================= Without Decorator ===============================================

const addFn=(...args)=>{
    if([...args].every(item => Number.isInteger(item))){
        return [...args].reduce((cur, acc)=> cur+acc,0)
    }
    return 'arguments cannot be non-integer'
    
}

const multipleFn=(...args)=>{
    if([...args].every(item => Number.isInteger(item))){
        return [...args].reduce((cur, acc)=> cur*acc, 1)
    }
    return 'arguments cannot be non-integer'
}

// console.log(addFn(1,2,3,4))
// console.log(addFn(1,2,3,4,'a'))
// console.log(multipleFn(1,2,3,4))
// console.log(multipleFn(1,2,3,4,'8'))

//======================================= With Decorator ===============================================

const addFn2=(...args)=>{
    return [...args].reduce((cur, acc)=> cur+acc, 0)
}
const multipleFn2=(...args)=>{
    return [...args].reduce((cur, acc)=> cur*acc, 1)
}

const decorator=(callback)=>{
    return (...args)=>{
        const isValidate=[...args].every(item => Number.isInteger(item))
        if(!isValidate){
            // throw new TypeError('arguments cannot be non-integer')
            return 'arguments cannot be non-integer'
        }
        return callback(...args)
    }
}

const add = decorator(addFn2)
const multiple = decorator(multipleFn2)


console.log(add(1,2,3,4))
console.log(add(1,2,3,4,'a'))
console.log(multiple(1,2,3,4))
console.log(multiple(1,2,3,4,'8'))