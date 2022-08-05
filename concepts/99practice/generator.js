function main(){
    return 10
    return 20
}
console.log('fn=>',main())
console.log('fn=>',main())
console.log('fn=>',main())
//================================================================================================
function main2(){
    return 100
    return 200
}
const val = main2()
// console.log(val)
//================================================================================================
function* gen(){
    yield 99
    yield 88
}
const Gen = gen()
console.log('gen=>',Gen.next().value)
console.log('gen=>',Gen.next().value)
console.log('gen=>',Gen.next().value)