// ALL must succeed

import { task1, task2, task3, task4, task5, task6 } from "./tasks.js";

Promise.all([task1(), task2(), task3()])
  .then((res) => console.log("res", res))
  .catch((err) => console.log("error", err));

Promise.all([task1(), task2(), task4()])
  .then((res) => console.log("res", res))
  .catch((err) => console.log("error", err));

Promise.all([task4(), task5(), task6()])
  .then((res) => console.log("res", res))
  .catch((err) => console.log("error", err));
