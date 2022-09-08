const arr = [1, 2, 3];

// const combinations = (arr) =>
//   arr.reduce(
//     (acc, item) => {
//       return acc.concat(acc.map((x) => [...x, item]));
//     },
//     [[]]
//   );

// console.log(combinations(arr).filter((a) => a.length > 0));


// var combine = function(a, min=1) {
//   var fn = function(n, src, got, all) {
//       if (n == 0) {
//           if (got.length > 0) {
//               all[all.length] = got;
//           }
//           return;
//       }
//       for (var j = 0; j < src.length; j++) {
//           fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
//       }
//       return;
//   }
//   var all = [];
//   for (var i = min; i < a.length; i++) {
//       fn(i, a, [], all);
//   }
//   all.push(a);
//   return all;
// }

// console.log(combine(arr))


// var arr = [1,2,3,4,5];

function getAllCombos(arr){
   if(arr[0] === undefined) return [arr]
   return getAllCombos(arr.slice(1)).flatMap(el => [el.concat(arr[0]), el])
}
console.log(getAllCombos(arr));
