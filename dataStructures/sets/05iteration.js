const set = new Set(['orange','apple','banana','mango'])

console.log(set)

for(let i of set){
    console.log('for of',i)
}

set.forEach((item, itemAgai) => console.log('for each',item, itemAgai))

//set.map(item => console.log(item)) //TypeError: set.map is not a function

//set.filter(item => console.log(item)) //TypeError: set.filter is not a function