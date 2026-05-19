const input = [
  { key: "sample1", data: "data1" },
  { key: "sample1", data: "data1" },
  { key: "sample2", data: "data2" },
  { key: "sample1", data: "data1" },
  { key: "sample3", data: "data3" },
  { key: "sample3", data: "data3" },
  { key: "sample4", data: "data4" },
];
// const output = {
//   sample1: [
//     { key: "sample1", data: "data1" },
//     { key: "sample1", data: "data1" },
//     { key: "sample1", data: "data1" },
//   ],
//   sample2: [{ key: "sample2", data: "data2" }],
//   sample3: [
//     { key: "sample3", data: "data3" },
//     { key: "sample3", data: "data3" },
//   ],
//   sample4: [{ key: "sample4", data: "data4" }],
// };

function main(obj) {
  let val = {};
  for (let i of obj) {
    const id = i.key;
    if (val[id]) {
      val[i.key].push(i);
    } else {
      val[i.key] = [i];
    }
  }
  return val;
}

function main2(obj) {
  let val = {};
  obj.forEach((i) => {
    if (val[i.key]) {
      val[i.key].push(i);
    } else {
      val[i.key] = [i];
    }
  });
  return val;
}
