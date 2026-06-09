const arr = [1, 2, 3];

Array.prototype.myReduce = function (callback, init) {
  let acc = init || this[0];
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], this);
  }
  return acc;
};

console.log(arr.reduce((acc, curr) => acc * curr, 1));
