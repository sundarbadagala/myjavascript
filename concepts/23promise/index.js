const caller = (callback) => {
  return new Promise((resolve, reject) => {
    const isOk = true;
    if (isOk) {
      resolve(callback("hellooo"));
    } else {
      reject("rejected");
    }
  });
};

caller((res) => console.log("first", res))
  .then(() => call((res) => console.log("second", res)))
  .catch((err) => console.log("err", err));
