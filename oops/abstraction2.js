//---------------------------------------With Abstraction-----------------------

//Abstract class (which sould not use)
class Vehicle {
  constructor(name, tyres) {
    this.name = name;
    this.tyres = tyres;
    if (this.constructor == Vehicle) {
      throw new Error("Cant create instance of abstract class");
    }
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

// const vehicle = new Vehicle("duke", 2); //throws error

const bike = new Bike("duke", 2);
console.log(bike.getName())