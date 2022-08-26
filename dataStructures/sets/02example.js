const arr = new Array();
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(2);
arr.push(1);
console.log(arr);
//-----------------------------------------
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);
console.log(set);
//-----------------------------------------
const set1 = new Set();
set1
  .add({ firstName: "kiran" })
  .add({ firstName: "varun" })
  .add({ firstName: "charan" });
console.log(set1)

for(let i of set1){
    console.log(i.firstName)
}