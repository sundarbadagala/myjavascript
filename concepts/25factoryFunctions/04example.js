const factoryFn = function(res){
    let num = 100
    let count = 0 
    return {
        caller(){
            return count
        },
        sum(){
            // return num * res
            return count += 1
        }
    }
}

const mainFn = factoryFn(5)

console.log(mainFn.caller())

console.log(mainFn.sum());
console.log(mainFn.sum());
console.log(mainFn.sum());
console.log(mainFn.sum());
