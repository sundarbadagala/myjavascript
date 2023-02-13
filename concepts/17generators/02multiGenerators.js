function* simpleGenerator(){
    yield 1
    yield 2
    yield 3
}

const generatorObject = simpleGenerator()
console.log(generatorObject.next());
console.log(generatorObject.next());
const generatorObject2 = simpleGenerator()
console.log(generatorObject2.next());
console.log(generatorObject2.next());