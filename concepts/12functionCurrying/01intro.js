//Currying is a process in functional programming in which we transform a function with multiple arguments into sequence of nesting functions that take one argument at a time.
//function(a,b,c) => function(a)(b)(c)

let n1=4
let n2=7
let n3=8 

//=============================================NORMAL FUNCTION========================================
function nomralFn(a,b,c){
    return a+b+c
}
console.log(nomralFn(n1,n2,n3))

//=============================================CURRIED FUNCTION========================================
function curriedFn(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(curriedFn(n1)(n2)(n3))

//=============================================CURRIED FUNCTION WITH FUNCTION========================================
function curriedFn2(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}
const curriedSum = curriedFn2(nomralFn)
console.log(curriedSum(n1)(n2)(n3))

//=============================================CURRIED FUNCTION WITH MULTIPLE STEPS========================================
const add1 = curriedSum(n1)
const add2 = add1(n2)
const add3 = add2(n3)
console.log(add3)