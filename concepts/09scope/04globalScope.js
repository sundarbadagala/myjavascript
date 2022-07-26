let firstName='ram'
const lastName ='raj'
var middleName='raghav'

if(true){  
    console.log('inside block',firstName)      //ram
    console.log('inside block',lastName)       //raj
    console.log('inside block',middleName)     //raghav
}

function main(){
    console.log('inside functoin',firstName)      //ram
    console.log('inside functoin',lastName)       //raj
    console.log('inside functoin',middleName)     //raghav
}
main()

console.log('global scope',firstName)          //ram 
console.log('global scope',lastName)           //raj
console.log('global scope',middleName)         //raghav

//=========================================================================================================
if(true){
    firstName='jan'         //changing firstName ram => jan
}
console.log('changed in block', firstName)      //jan
function mains(){
    firstName='varun'       //changing firstName jan => varun
}
mains()
console.log('changed in function',firstName)    //varun
