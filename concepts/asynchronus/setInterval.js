const add=(()=>{
    let val =0
    return ()=>{
        val++
        console.log(val)
    }
})()

setInterval(add, 1000 )
