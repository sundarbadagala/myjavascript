const arr = [1, 2, 3];

Array.prototype.myMethod = function () {
  return "hello";
};

Array.prototype.myMap = function (callback) {
  let results = [];
  for (let i = 0; i < this.length; i++) {
    results.push(callback(this[i], i, this));
  }
  return results;
};

Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myReduce = function (callback, initValue) {
  let acc = initValue;
  let startIndex = 0;
  for (let i = startIndex; i < this.length; i++) {
    acc = callback(acc, this[i], this);
  }
  return acc;
};

if (!Array.prototype.includes) {
  Array.prototype.includes = function (value) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === value) {
        return true;
      }
    }
    return false;
  };
}

// console.log(arr.myMethod())

// const newArr = arr.myMap(item => item * 2)
// console.log(newArr)

// const newArr2 = arr.myFilter(item => item >= 2)
// console.log(newArr2)

// const newArr3 = arr.myReduce((curr, acc) => curr * acc, 1)
// console.log(newArr3)


console.log(arr.includes(9))