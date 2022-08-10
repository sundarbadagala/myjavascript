const main = ()=>{
    console.log('hello')
}

setInterval(main, 1000)     //fixed time interval
                            //its continuosly calling with no repsect of function executing time
                            //no best method

const main2=()=>{
    console.log('world')
    setTimeout(main2, 1000) //we can change interval easily
                            //it calls again when only the function returns
                            //best method 
}

setTimeout(main2,1000)  