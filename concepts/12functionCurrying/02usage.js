function multiple(a){
    return function(b){
        return a*b
    }
}

const twoMultiplyWith = multiple(2)
console.log(twoMultiplyWith(3))     //6
console.log(twoMultiplyWith(6))     //12

const threeMultiplyWith = multiple(3)
console.log(threeMultiplyWith(4))   //12
console.log(threeMultiplyWith(7))   //21

const fourMultipleWith = multiple(4)
console.log(fourMultipleWith(4))   //16
console.log(fourMultipleWith(7))   //28

