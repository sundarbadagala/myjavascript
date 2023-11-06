const p = new Promise((res, rej) => {
  setTimeout(() => {
    res("promise...");
  }, 1000);
});

const main = async () => {
  p.then((res) => console.log(res));
  console.log("hello world");
};
// main()

const mainTwo = async () => {
  const val = await p;
  console.log("hello world");
  console.log(val);
};
// mainTwo()

const mainThree = async () => {
  const val1 = await p;
  console.log("hello world one");
  console.log(val1);

  const val2 = await p;
  console.log("hello world two");
  console.log(val1);
};

mainThree()
