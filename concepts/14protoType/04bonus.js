//==================== WITHOUT ========================

function Person1(name, age) {
  this.name = name;
  this.age = age;

  this.getDetails = function () {
    return `Name:${this.name} - Age:${this.age}`;
  };
}

const p1 = new Person1("Ram", 24);

console.log(p1.getDetails());

//==================== WITH ========================

function Person2(name, age){
    this.name = name
    this.age = age
}

Person2.prototype.getDetails = function(){
    return `Name:${this.name} - Age:${this.age}`;
}

const p2 = new Person2('Ram', 24)

console.log(p2.getDetails())