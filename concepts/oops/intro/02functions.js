const player =(name, power, items )=>{
    return {name, power, items}
}

const firstPlayer = player('vijay', 100, ['a','c','d'])
const secondPlayer = player('ram',89, ['v','3','9'])

console.log(firstPlayer);
console.log(secondPlayer);

firstPlayer.power = 99
firstPlayer.shield = 'leather'

console.log(firstPlayer);