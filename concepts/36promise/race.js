// FIRST completed wins

import { task1, task2, task5, task4, task3 } from "./tasks.js";

Promise.race([task1(), task2(), task3()])
  .then((res) => console.log("res", res))
  .catch((err) => console.log("error", err));

Promise.race([task5(), task2(), task4()])
  .then((res) => console.log("res", res))
  .catch((err) => console.log("error", err));
