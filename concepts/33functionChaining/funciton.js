function main(num) {
  let i = num;
  return {
    add: function (num) {
      i += num;
      return this;
    },
    multiple: function (num) {
      i *= num;
      return this;
    },
    print() {
      return i;
    },
  };
}

const x = main(10);
const x2 = main(10);

const value = x.add(2).multiple(10).print();
const value2 = x2.multiple(2).add(10).print();

console.log(value);
console.log(value2);
