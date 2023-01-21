class FirstPlayer {
  constructor(name, power, items, shield) {
    this.name = name;
    this.power = power;
    this.items = items;
    this.shield = shield;
  }
}

class SecondPlayer {
  constructor(name, power, items, gun) {
    this.name = name;
    this.power = power;
    this.items = items;
    this.gun = gun;
  }
}

class ThirdPlayer {
  constructor(name, power, items, sword) {
    this.name = name;
    this.power = power;
    this.items = items;
    this.sword = sword;
  }
}


const firstPlayer = new FirstPlayer('vinay',900, ['a','b','c'], 'leather shield')
const secondPlayer = new SecondPlayer('ram',1000, ['z','x','y'], 'ak47')
const thirdPlayer = new ThirdPlayer('varun',60, ['1','2','3'], 'wooden knife')

console.log(firstPlayer);
console.log(secondPlayer);
console.log(thirdPlayer);