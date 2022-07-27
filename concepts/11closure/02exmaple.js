function outer1(){
    let count=0
    function innner(){
        count++
        return count
    }
    return innner
}

const add = outer1()
console.log(add())
console.log(add())
console.log(add())

//===========================================================================

const outer2 = ()=>{
    let count = 0
    const inner=()=>{
        count ++
        return count
    }
    return inner
}

const add2 = outer2()
console.log(add2())
console.log(add2())
console.log(add2())
