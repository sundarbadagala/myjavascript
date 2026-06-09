const arr = [1, 2, 3];

Array.prototype.myMap = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }
  return res;
};

console.log(arr.myMap((item) => item * 2));
