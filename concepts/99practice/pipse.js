const addTwo = (a) => a + 2;
const square = (a) => a * a;


const fnOne = (x)=>{
    const temp = addTwo(x)
    return square(temp)
}

const fnTwo=(x)=>{
    return square(addTwo(x))
}

const fnThree=(x)=>{
    return addTwo(x)
    |> square(%)
}

// console.log(fnOne(2));
// console.log(fnTwo(2));

console.log(fnThree(2));
