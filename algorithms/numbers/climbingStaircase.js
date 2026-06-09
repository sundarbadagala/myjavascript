//Given a staicase of "n" steps, count the number of distinct ways to climb to the top. You can climb eithe 1 or 2 steps at a time

function climbingStaircase(n) {
  let noOfWays = [1, 2];
  for (let i = 2; i < n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
}
// BigO - O(n)

console.log(climbingStaircase(1)); // 1
console.log(climbingStaircase(2)); //(1,1) 2
console.log(climbingStaircase(3)); //(1,1,1) (2,1) (1,2)
console.log(climbingStaircase(4)); //(1,1,1,1) (1,1,2) (1,2,1) (2,1,1) (2,2)
console.log(climbingStaircase(5)); //(1,1,1,1,1) (1,1,1,2) (1,1,2,1) (1,2,1,1) (2,1,1,1) (2,2,1) (2,1,2) (1,2,2)
console.log(climbingStaircase(6)); //(1,1,1,1,1,1) (1,1,1,1,2) (1,1,1,2,1) (1,1,2,1,1) (1,2,1,1,1) (2,1,1,1,1) (2,1,1,2) (2,1,2,1) (2,2,1,1) (1,1,2,2) (1,2,2,1) (1,2,1,2) (2,2,2)

// 2 steps
function main2(n) {
  if (n <= 2) return n;
  let a = 1;
  let b = 2;
  for (let i = 3; i <= n; i++) {
    let curr = a + b;
    a = b;
    b = curr;
  }
  return b;
}

console.log("--- main", main2(5));

//3 steps
function main3(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  if (n === 2) return 2;
  let a = 1;
  let b = 1;
  let c = 2;
  for (let i = 3; i <= n; i++) {
    let curr = a + b + c;
    a = b;
    b = c;
    c = curr;
  }
  return c;
}
