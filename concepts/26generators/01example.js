function* simpleGenerator(){
    yield 1
    yield 2
    yield 3
}

const generatorObject = simpleGenerator()

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());

console.log('---------------------------------------------------------');

function* simpleGeneratorTwo(){
    yield 1
    yield 2
    return 3
}

const generatorObjectTwo = simpleGeneratorTwo()

console.log(generatorObjectTwo.next());
console.log(generatorObjectTwo.next());
console.log(generatorObjectTwo.next());

console.log('--------------------------------------------------------');
function* counter(iterable){
    for(let item of iterable){
        yield item * item
    }
}

const counterObj = counter([1,2,3])

console.log(counterObj.next());
console.log(counterObj.next());
console.log(counterObj.next());
console.log(counterObj.next());