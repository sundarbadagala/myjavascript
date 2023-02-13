const factoryFn = function(res){
    let num = 100
    return {
        sum(){
            return num * res
        }
    }
}

const mainFn = factoryFn(5)

console.log(mainFn.sum());
