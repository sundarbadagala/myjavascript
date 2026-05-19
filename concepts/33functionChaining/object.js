const main = {
  data: {
    i: 0,
  },
  initiate: function (num = 0) {
    this.data.i = num;
    return this;
  },
  add: function (num) {
    this.data.i += num;
    return this;
  },
  subtract: function (num) {
    this.data.i -= num;
    return this;
  },
  multiple: function (num) {
    this.data.i *= num;
    return this;
  },
  print: function () {
    return this.data.i;
  },
};

const value = main.initiate(100).add(10).multiple(2).print();
const value2 = main.initiate(100).multiple(2).add(10).print()

console.log(value);
console.log(value2)