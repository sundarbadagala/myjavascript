//-------------------------------------FUNCTION DECLERATION-------------------------------
console.log(fnOne()); //hello world

function fnOne() {
  return "hello world";
}

//---------------------------------------ARROW FUNCTION VAR---------------------------------
console.log(fnFive()); //TypeError: fnFive is not a function

var fnFive = () => {
  return "arrow function";
};

//---------------------------------------ARROW FUNCTION LET/CONST---------------------------------
//console.log(fnTwo())  //ReferenceError: Cannot access 'fnTwo' before initialization

const fnTwo = () => {
  return "arrow function";
};

//---------------------------------------FUNCTION EXPRESSION VAR-----------------------------
//console.log(fnThree())      //TypeError: fnThree is not a function

var fnThree = function () {
  return "hello";
};
//---------------------------------------FUNCTION EXPRESSION LET/CONST-----------------------------
//console.log(fnFour())        //ReferenceError: Cannot access 'fnFour' before initialization

let fnFour = function () {
  return "four function";
};
