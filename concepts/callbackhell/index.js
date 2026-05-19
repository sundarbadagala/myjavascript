const first = (n, callback) => {
  n = `${n} hello`;
  return callback(n);
};
const second = (n, callback) => {
  n = `${n} how`;
  return callback(n);
};
const third = (n, callback) => {
  n = `${n} are`;
  return callback(n);
};
const fourth = (n, callback) => {
  n = `${n} you`;
  return callback(n);
};

const main = (callback) => {
  return callback("hi");
};

const res = main((n) => {
  return first(n, (n) => {
    return second(n, (n) => {
      return third(n, (n) => {
        return fourth(n, (n) => {
          return n;
        });
      });
    });
  });
});

console.log(res);
