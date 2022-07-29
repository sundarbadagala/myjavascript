//declaration
const a               //SyntaxError: Missing initializer in const declaration

//declaration+assigning = initilizing
const a =10

//re-assign
a = 30                //TypeError: Assignment to constant variable.

//re-declare
const a = 9           //SyntaxError: Identifier 'a' has already been declared

//===================================================================================
//With a const declaration, you can't reassign the variable but you can mutate it, which is what happens with the Array.prototype.push method.
//When you're adding to an array or object you're not re-assigning or re-declaring the constant, it's already declared and assigned, you're just adding to the "list" that the constant points to.

const arr =[1,2,3]
arr.push(4)

const obj = {name:'kumar'}
obj['age'] = 20