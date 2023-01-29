// I want 1, 2, 4, 9, 16, 25, 36 (squares)...

function* squareGen(){
    let i = 0
    while(true){
        i++
        yield i*i
    }
}

const squareObj = squareGen()
console.log(squareObj.next().value);
console.log(squareObj.next().value);
console.log(squareObj.next().value);
console.log(squareObj.next().value);
console.log(squareObj.next().value); // it goes on...

console.log('------------------------------------');

function* squareGenTwo(max){
    let i =0
    while(i < max){
        i++
        yield i*i
    }
}

for(let n of squareGenTwo(10)){
    console.log(n);
}