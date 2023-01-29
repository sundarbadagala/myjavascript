class Player {
  constructor(name, power, items) {
    this.name = name;
    this.power = power;
    this.items = items;
  }
  speak(line){
    return `${this.name} says: ${line}`
  }
}

class FirstPlayer extends Player {
  constructor(name, power, items, shield) {
    super(name, power, items);
    this.shield = shield;
  }
}

const firstPlayer = new FirstPlayer("vinay", 9, ["a", "b", "c"], "leather");

console.log(firstPlayer.speak('hellooo'));
