//----------------------------------------- Without Abstraction-------------------------

//Abstract class (which sould not use)
class Vehicle {
  constructor(name, tyres) {
    this.name = name;
    this.tyres = tyres;
  }
  getName() {
    return `${this.name}`;
  }
}

//sub class (which should use)
class Bike extends Vehicle {
  constructor(name, tyres) {
    super(name, tyres);
  }
}

class Car extends Vehicle {
  constructor(name, tyres, doors) {
    super(name, tyres);
    this.doors = doors;
  }
}

const vehicle = new Vehicle("duke", 2);
console.log(vehicle.getName());

//Abstract class is a class which cant be initiated and require subclasses which inherit from a particular abstract class to provide implementations.
