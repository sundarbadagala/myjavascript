const main = function (init = 0) {
  this.i = init;
  this.add = function (i) {
    this.i += i;
    return this;
  };
  this.multiple = function (i) {
    this.i *= i;
    return this;
  };
  this.print = function () {
    return this.i;
  };
};

const x = new main(10);
const x2 = new main(10);

const value = x.add(10).subtract(2).multiple(10).print();
const value2 = x2.multiple(10).subtract(2).add(10).print();

console.log(value);
console.log(value2);
