class Main {
  constructor(data) {
    this.data = data;
  }
  add(num) {
    this.data += num;
    return this;
  }
  subtract(num) {
    this.data -= num;
    return this;
  }
  multiple(num) {
    this.data *= num;
    return this;
  }
  print() {
    return this.data;
  }
}

const x = new Main(10);
const x2 = new Main(10)

const value = x.add(10).multiple(5).print();
const value2 = x2.multiple(10).add(5).print()

console.log(value);
console.log(value2);
