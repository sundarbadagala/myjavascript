//let and const values not accesses outside the scope, but var values can access

if(true){
    let firstName ='ram'
    const lastName='raj'
    var middleName='raghav'
    console.log(firstName)      //ram
    console.log(lastName)       //raj
    console.log(middleName)     //raghav
}
// console.log(firstName)       //ReferenceError: firstName is not defined
// console.log(lastName)        //ReferenceError: lastName is not defined
// console.log(middleName)      //raghav