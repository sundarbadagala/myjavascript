// const promise = new Promise((resolve, reject)=>{
//     const isOk = true
//     if(isOk){
//         resolve('resolved')
//     }else{
//         reject('rejected')
//     }
// })

// promise
// .then(res => console.log(res))
// .catch(err => console.log(err))

const callback = () => {
  return "hello";
};

const callback2 = (str) => {
  return `${str} world`;
};

const vari = 10;

const promise = (cb) =>
  new Promise((resolve, reject) => {
    if (typeof cb === "function") {
      resolve(cb);
    } else {
      reject("callback is not function");
    }
  });

promise(callback)
  .then((res) => res())                         //hello
  .then((res) => console.log(callback2(res)))   //hello world
  .catch((err) => console.log(err));
