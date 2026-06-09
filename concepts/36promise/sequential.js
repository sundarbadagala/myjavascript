import { task1, task2, task3 } from "./tasks.js";

function runSequentially(tasks) {
  return tasks.reduce((promise, task) => {
    return promise.then((result) => task().then((data) => [...result, data]));
  }, Promise.resolve([]));
}

async function runSequentially2(tasks) {
  const results = [];
  for (const task of tasks) {
    const data = await task();
    results.push(data);
  }
  return results;
}

//-----------------------------

runSequentially([task1, task2, task3]).then((res) => console.log(res));
runSequentially2([task1, task2, task3]).then((res) => console.log(res));
