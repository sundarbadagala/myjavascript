//nested functions have access to variables declared in their own scope as well as variables declared in the outer scope
//also called lexical scope

let a = 10
function outer(){
    let b = 20
    function inner(){
        let c = 30
        return `${a},${b},${c}`
    }
    return inner()
}
console.log(outer())