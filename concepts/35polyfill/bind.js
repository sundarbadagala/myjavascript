const person = {
  name: "vijay"
};

function main(age, color) {
  return `${this.name}:${age}=${color}`;
}

const fn = main.bind(person);
console.log(fn(34, "red"));
// ----------------------------------------------

Function.prototype.myBind = function (context = {}, ...args1) {
  const fn = this;
  return function (...args2) {
    return fn.apply(context, [...args1, ...args2]);
  };
};
const fn2 = main.myBind(person);
console.log(fn2(89, "orange"));
