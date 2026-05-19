class Vehicle {
  constructor(name, tyres) {
    this.name = name;
    this.tyres = tyres;
  }
  getName() {
    return `name: ${this.name} `;
  }
  getTyres() {
    return `tyres: ${this.tyres}`;
  }
}

class Bike extends Vehicle {
  constructor(name, tyres) {
    super(name, tyres);
  }
  getDetails() {
    return `${this.getName()}; ${this.getTyres()}`;
  }
}

class Car extends Vehicle {
  constructor(name, tyres, doors) {
    super(name, tyres);
    this.doors = doors;
  }
  getDoors() {
    return `doors: ${this.doors}`;
  }
  getDetails() {
    return `${this.getName()}; ${this.getTyres()}; ${this.getDoors()}`;
  }
}

class Flight extends Vehicle {
  constructor(name, tyres, doors, wings) {
    super(name, tyres);
    this.doors = doors;
    this.wings = wings;
  }
  getDoors() {
    return `doors: ${this.doors}`;
  }
  getWings() {
    return `wings: ${this.wings}`;
  }
  getDetails() {
    return `${this.getName()}; ${this.getTyres()}; ${this.getDoors()}; ${this.getWings()}`;
  }
}

const bike = new Bike("duke", 2);
console.log(bike.getDetails());

const car = new Car("punch", 4, 4);
console.log(car.getDetails());

const flight = new Flight("kingfisher", 2, 2, 2);
console.log(flight.getDetails());

//Class inheritance is the feature that enables certain classes to take all the methods and properties of another one (parent class) and makes it possible to extend the parent class by adding more.
