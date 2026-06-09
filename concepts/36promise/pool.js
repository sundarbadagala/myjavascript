// Promise pool / concurrency control
import { task1, task2, task3 } from "./tasks.js";

async function pool(tasks, limit) {
  let i = 0;

  const results = [];

  async function worker() {
    while (i < tasks.length) {
      const curr = i++;

      try {
        results[curr] = await tasks[curr]();
      } catch (err) {
        results[curr] = err;
      }
    }
  }

  const workers = Array(Math.min(limit, tasks.length)).fill(null).map(worker);

  await Promise.all(workers);

  return results;
}

pool([task2, task1, task3], 2).then((res) => console.log("->", res));

Promise.all([task2(), task1(), task3()]).then((res) => console.log("=>", res));
