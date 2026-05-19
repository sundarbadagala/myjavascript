class Vehicle {
    constructor(name, tyres){
        let _name = name
        let _tyres = tyres
        this.getName=()=>{
            return _name
        }
    }
}

class Car extends Vehicle{
    constructor(name, tyres, doors){
        super(name, tyres)
        let _doors = doors
        this.getDetails=()=>{
            return `${this.getName()}, ${_doors}, ${tyres}`
        }
    }
}

const car = new Car('punch', 4, 4)

console.log(car.getDetails())