class Vehicle {
  _name;
  _tyres;
  constructor(name, tyres) {
    this._name = name;
    this._tyres = tyres;
  }
  sound() {
    return "juyyyyyy";
  }
}


class Bike extends Vehicle{
    constructor(name, tyres){
        super(name, tyres)
    }
    sound(){
        return 'wrooommmm'
    }
}

const bike = new Bike('duke', 4)

console.log(bike.sound())

//Plymorphism is a concept that utilize inheritance for reusing methods multiple times with different behaviour depending of class types.