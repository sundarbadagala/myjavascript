//Generators also iterable

function* letters(){
    yield 'a'
    yield 'b'
    yield 'c'
}
for(const letter of letters()){
    console.log(letter);
}
console.log([...letters()]);

console.log('------------------------------------------------');

function* simpleGenerator(){
    yield 1
    yield 2
    yield 3
    yield 4
}
const generatorObject = simpleGenerator()
while(generatorObject.next().done === false){
    console.log(generatorObject.next().value);
}