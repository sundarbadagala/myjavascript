import { task1, task4 } from "./tasks.js";

function retry(fn, retries, delay) {
  return new Promise((resolve, reject) => {
    function attempt() {
      console.log("Atteming", retries);
      fn()
        .then(resolve)
        .catch((error) => {
          if (retries === 0) {
            reject(error);
          } else {
            retries--;
            setTimeout(attempt, delay);
          }
        });
    }
    attempt();
  });
}

retry(task4, 3, 1000)
  .then((res) => console.log("res", res))
  .catch((error) => console.log("error", error));
