import { task1, task2, task3, task4 } from "./tasks.js";

Promise.all([task1, task2, task3])
  .then((res) => console.log("succes", res))
  .catch((e) => console.log("error", e));

Promise.all([task1, task2, task4])
  .then((res) => console.log("succes", res))
  .catch((e) => console.log("error", e));

function myPromiseAll(promises) {
  return new Promise((res, rej) => {
    let result = [];
    let completed = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((data) => {
          result[index] = data;
          completed++;
          if (completed === promises.length) {
            res(result);
          }
        })
        .catch(rej);
    });
  });
}

myPromiseAll([task1, task2, task3])
  .then((res) => console.log("my.success", res))
  .catch((err) => console.log("my.error", err));

myPromiseAll([task1, task2, task4])
  .then((res) => console.log("my.success", res))
  .catch((err) => console.log("my.error", err));
