import { task1, task3, task2 } from "./tasks.js";

function parellal(tasks) {
  return Promise.all(tasks.map((task) => task()));
}

parellal([task1, task2, task3]).then((res) => console.log(res));
