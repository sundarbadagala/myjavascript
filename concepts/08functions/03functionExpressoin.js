//Here we define a function using a variable and store the returned value in that variable.
//the whole function is an expression and the returned value is stored in the variable. We use the variable name to call the function.

const main = function(){
    return 'hello world'
}
console.log(main())

const add = function(a,b){
    return a+b
}
console.log(add(3,4))