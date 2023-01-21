class Player {
  constructor(name, power, items) {
    this.name = name;
    this.power = power;
    this.items = items;
  }
}

class FirstPlayer extends Player {
  constructor(name, power, items, shield) {
    super(name, power, items);
    this.shield = shield;
  }
}

class SecondPlayer extends Player {
  constructor(name, power, items, gun) {
    super(name, power, items);
    this.gun = gun;
  }
}

class ThirdPlayer extends Player {
  constructor(name, power, items, sword) {
    super(name, power, items);
    this.sword = sword;
  }
}

const firstPlayer = new FirstPlayer(
  "vinay",
  900,
  ["a", "b", "c"],
  "leather shield"
);
const secondPlayer = new SecondPlayer("ram", 1000, ["z", "x", "y"], "ak47");
const thirdPlayer = new ThirdPlayer(
  "varun",
  60,
  ["1", "2", "3"],
  "wooden knife"
);

console.log(firstPlayer);
console.log(secondPlayer);
console.log(thirdPlayer);
