//A closure is the combination of function bundled together with reference to it's surrounding state
//Closures are created every time a function is created, at function creation time.

//In JS, when we return a function from another function, we are effectively returning a combination of the function definition along with the function's scope.
//This would let the function definition have an associated persistance memory which could hold on to live data between executions.
//That combination of the function and its scope chain is what is called a closure in JS

//A closure is a function having access to the parent scope, even after the parent function has closed.

function outer1(){
    let counter = 0
    function inner1(){
        counter++
        console.log(counter)
    }
    return inner1()
}
outer1()
outer1()
outer1()    //with every new invocation of the function a temporary memory is established and we have a new counter variable initialized to 0 and then incremented hence every outer function call will always print 1 

//==============================================CLOSURE======================================

//Closure is created when a function is returned from another function i.e we are returning the inner function from the outer function
//javascript doesn't just return the inner function it returns the inner function as well as its scope i.e counter variable
//the function inner bundled together with the variable counter which is together termed as a closure

function outer2(){
    let counter=0
    function inner2(){
        counter++
        console.log(counter)
    }
    return inner2
}
const add = outer2()
add()
add()
add()
