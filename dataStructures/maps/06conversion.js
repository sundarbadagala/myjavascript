//---------------OBJECT OT MAP------------

const obj = {
  name: "vijay",
  color: "blue",
  age: 34,
};

// console.log(Object.entries(obj));

const map = new Map(Object.entries(obj));

// console.log(map);

//---------------MAP OT OBJECT------------

const map1 = new Map([
  ["name", "vijay"],
  ["color", "blue"],
  ["age", 23],
]);

// console.log(map1);

const obj1 = Object.fromEntries(map1);

// console.log(obj1);

//---------------MAP OT OBJECT------------

const map2 = new Map();
map2.set("name", "kuamr").set("age", 45).set("color", "red");

// console.log(map2)

const obj2 = Object.fromEntries(map2)

// console.log(obj2)