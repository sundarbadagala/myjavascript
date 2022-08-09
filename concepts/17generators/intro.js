function* generatorFunction(){
    yield 'hello'
    yield 'world'
}

const generatorObject = generatorFunction()

for(let i of generatorObject){
    console.log(i)
}