const promise = (num) => {
  return new Promise((resolve) => {
    resolve(num);
  });
};

const add = (prev, curr) => {
  return prev + curr;
};
const multiple = (prev, curr) => {
  return prev * curr;
};
const subtract = (prev, curr) => {
  return prev - curr;
};

promise(10)
  .then((res) => add(res, 10))
  .then((res) => multiple(res, 10))
  .then((res) => subtract(res, 10))
  .then((res) => console.log(res));
