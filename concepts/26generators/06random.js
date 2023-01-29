// ['ram','sam','jam','king'] return random names, should not return same name twice and consecutively

function* randomGen(arr){
    const val = arr
    while(val.length !== 0){
        const randomIndex = Math.floor(Math.random() * val.length)
        const name = arr[randomIndex]
        val.splice(randomIndex, 1)
        yield name
    }
}

const names = ['ram','sam','jam','king']

const randomObj = randomGen(names)

console.log(randomObj.next().value);

//------we can iterable above function by for of loop-----

// for(let name of randomGen(names)){
//     console.log(name);
// }