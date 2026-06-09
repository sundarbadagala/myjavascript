export const task1 = () =>
  new Promise((res) => setTimeout(() => res("task 1 - 1000"), 1000));

export const task2 = () =>
  new Promise((res) => setTimeout(() => res("task 2 - 5000"), 5000));

export const task3 = () =>
  new Promise((res) => setTimeout(() => res("task 3 - 3000"), 3000));

export const task4 = () =>
  new Promise((res, rej) => setTimeout(() => rej("task 4 - 3000"), 3000));

export const task5 = () =>
  new Promise((res, rej) => setTimeout(() => rej("task 5 - 500"), 500));

export const task6 = () =>
  new Promise((res, rej) => setTimeout(() => rej("task 6 - 8000"), 8000));
