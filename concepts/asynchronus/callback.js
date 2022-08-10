//callbacks are functions passed as arguments to other functions 
//they can be synchronous if they execute immediately or 
//they can be asynchronous where they get executed after some time has passed some event has occurred or some data has been fetched

//callback hell

const main=(fName, lName)=>{
    return `hello ${fName} ${lName}`
}

const higherOrderFunction=(callback)=>{
    const firstName = 'vijay'
    const lastName = 'kumar'
    return callback(firstName, lastName)
}

console.log(higherOrderFunction(main))



//synchronus higherOrderFunctions
//array methods

//asynchronus higherOrderFunctions
//set time out
//add event listeners