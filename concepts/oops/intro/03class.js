class Player {
    constructor(name, power, items){
        this.name = name
        this.power = power
        this.items = items
    }
}

const firstPlayer = new Player('vijay', 99, ['a','d','d'])
const secondPlayer = new Player('ram', 34, ['1','5','9'])

console.log(firstPlayer);
console.log(secondPlayer)
firstPlayer.shield = 'leather'
console.log(firstPlayer);