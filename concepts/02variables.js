// variables can store some info
// we can use that info later
// we can change that info later

// -----------------var--------------------
//var is global variable, we can use anywhere in the code
//var can redefine and reassign

//declare variable
var vNameOne
//assign variable
vNameOne = 'apple'
//re assign variable
vNameOne = 'banana'
//define variable = decleare + assign varible
var vNameTwo = 'orange'
//redefine variable
var vNameTwo ='mango'

// -----------------let--------------------
//let can act as local variable when it is in scope, we can't access outside the scope
//let can reassign but can't redefine

//define variable
let lNameOne = 'rose'
//re assign variable
lNameOne='lilly'

// -----------------const--------------------
//const can act as local variable when it is in scope, we can't access outside the scope
//const neither reassign not redefine

//define variable
const cNameOne = 'rose'


//-----------------variables are case sensitive-------------
var firstName = 'hello'
var firstname = 'world' //both variable have different values

//---------------Rules for naming variables

// 1.Can't start with number
//  -> 2name, 1age

// 2.Can use only underscore _ or dollar Symbol
//  -> _name, $age

// 3.Can't use Space 
//  -> first name

// 4.Use camelCase
//  -> firstName, lastName, mainValue
