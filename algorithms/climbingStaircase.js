//Given a staicase of "n" steps, count the number of distinct ways to climb to the top. You can climb eithe 1 or 2 steps at a time

function climbingStaircase(n) {
  let noOfWays = [1, 2];
  for (let i = 2; i < n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
}
// BigO - O(n)


console.log(climbingStaircase(1));  // 1
console.log(climbingStaircase(2));  //(1,1) 2
console.log(climbingStaircase(3));  //(1,1,1) (2,1) (1,2)
console.log(climbingStaircase(4));  //(1,1,1,1) (1,1,2) (1,2,1) (2,1,1) (2,2)
console.log(climbingStaircase(5));  //(1,1,1,1,1) (1,1,1,2) (1,1,2,1) (1,2,1,1) (2,1,1,1) (2,2,1) (2,1,2) (1,2,2)
console.log(climbingStaircase(6));  //(1,1,1,1,1,1) (1,1,1,1,2) (1,1,1,2,1) (1,1,2,1,1) (1,2,1,1,1) (2,1,1,1,1) (2,1,1,2) (2,1,2,1) (2,2,1,1) (1,1,2,2) (1,2,2,1) (1,2,1,2) (2,2,2)

