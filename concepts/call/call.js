const person = {
  fullname(from, at) {
    return `Hi ${this.firstName} ${this.lastName}, from ${from} at ${at}`;
  },
};

const p1 = {
  firstName: "Ram",
  lastName: "Kumar",
};
console.log(person.fullname.call(p1, "Hyd", "Npsira"));
