const arr = ["world", "earth", "universe"];

const higherOrderFunction = (callback) => {
  setTimeout(() => {
    callback(arr[0]);
    setTimeout(() => {
      callback(arr[1]);
      setTimeout(() => {
        callback(arr[2]);
      }, 1000);
    }, 1000);
  }, 1000);
};

const callback = (name) => {
  console.log(`hello ${name}`);
};

// higherOrderFunction(callback)

const higherOrderFunction2 = (() => {
  let i = 0;
  return (callback) => {
    callback(arr[i]);
    i++;
    const timeOut = setTimeout(() => {
      console.log("<=", i);
      higherOrderFunction2(callback);
    }, 2000);
    console.log("=>", i);
    if (i === arr.length) {
      clearTimeout(timeOut);
    }
  };
})();

higherOrderFunction2(callback);
