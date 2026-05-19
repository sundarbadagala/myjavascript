const human = {
    fullname(from, at) {
      return `Hi ${this.firstName} ${this.lastName}, from ${from} at ${at}`;
    },
  };
  
  const h1 = {
    firstName: "Ram",
    lastName: "Kumar",
  };
  console.log(human.fullname.apply(h1, ["Hyd", "Npsira"]));