const car = {
  modal: "Audi",
  year: 2012
};

function vehicle() {
  console.log(`Vehicle ${this.modal} - manufacture date ${this.year}`);
}

const newVehicle = vehicle.bind(car);

newVehicle();

//----------------------------------CUSTOM BIND--------------------------------

Function.prototype.myBind = function (context) {
  var fn = this;
  return function () {
    return fn.apply(context, arguments);
  };
};

const newVehicle2 = vehicle.myBind(car)
newVehicle2()
