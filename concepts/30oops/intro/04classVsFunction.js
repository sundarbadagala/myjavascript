class Player {
  constructor(name, power, items) {
    this.name = name;
    this.power = power;
    this.items = items;
  }
  speak(line) {
    return `${this.name} says: ${line}`;
  }
}

const firstPlayer = new Player("vijay", 77, ["a", "b", "c"]);

function AnothePlayer(name, power, items) {
  this.name = name;
  this.power = power;
  this.items = items;
  this.speak = function (line) {
    return `${this.name} says: ${line}`;
  };
}

const secondPlayer = new AnothePlayer("kumar", 54, ["1", "2", "4"]);

console.log("-------------------------------------------");
console.log(firstPlayer);
console.log(firstPlayer.speak("helloooo"));
console.log(Object.getOwnPropertyNames(firstPlayer));
console.log(Object.getOwnPropertyNames(firstPlayer.__proto__));
console.log("-------------------------------------------");
console.log(secondPlayer);
console.log(secondPlayer.speak("hiiiiii"));
console.log(Object.getOwnPropertyNames(secondPlayer));
console.log(Object.getOwnPropertyNames(secondPlayer.__proto__));
console.log("-------------------------------------------");
