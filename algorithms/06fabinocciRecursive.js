function fabinocci(n){
    if(n<2){
        return n
    }
    return fabinocci(n-1) + fabinocci(n-2)
}

//BigO - Iterative

console.log('0',fabinocci(0)) //0
console.log('1',fabinocci(1)) //0,1
console.log('2',fabinocci(2)) //0,1,1
console.log('3',fabinocci(3)) //0,1,1,2
console.log('4',fabinocci(4)) //0,1,1,2,3
console.log('5',fabinocci(5)) //0,1,1,2,3,5
console.log('6',fabinocci(6)) //0,1,1,2,3,5,8
console.log('7',fabinocci(7)) //0,1,1,2,3,5,8,13