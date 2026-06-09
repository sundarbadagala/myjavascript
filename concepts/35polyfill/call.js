const person = {
  name: "ram"
};

function main(age, color) {
  return `Hi ${this.name}:${age}-${color}`;
}

console.log(main.call(person, 23, "red"));

// -----------------------------------

Function.prototype.myCall = function (context = {}, ...args) {
  context.fn = this;
  const res = context.fn(...args);
  delete context.fn;
  return res;
};

console.log(main.myCall(person, 87, "black"));
