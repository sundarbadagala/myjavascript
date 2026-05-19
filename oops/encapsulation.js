//------------------------------Without encapsulation----------------------------
class VehicleOne {
  constructor(name, tyres) {
    this.name = name;
    this.tyres = tyres;
  }
}

class CarOne extends VehicleOne {
  constructor(name, tyres, doors) {
    super(name, tyres);
    this.doors = doors;
  }
}

const carOne = new CarOne("punch", 4, 4);

console.log(carOne.name);
console.log(carOne.tyres);
console.log(carOne.doors);

//------------------------------With encapsulation---------------------------------
class VehicleTwo {
  _name;
  _tyres;
  constructor(name, tyres) {
    this._name = name;
    this._tyres = tyres;
  }
  getName() {
    return this._name;
  }
}

class CarTwo extends VehicleTwo {
  _doors;
  constructor(name, tyres, doors) {
    super(name, tyres);
    this._doors = doors;
  }
  getTyres() {
    return this._tyres;
  }
  getDoors() {
    return this._doors;
  }
}

const carTwo = new CarTwo("punch", 4, 4);

console.log(carTwo.name);
console.log(carTwo.tyres);
console.log(carTwo.doors);
console.log(carTwo.getName());
console.log(carTwo.getTyres());
console.log(carTwo.getDoors());


//Encapsulation is the restriction mechanism making accessing the data imposible without using special methods dedicated for this.