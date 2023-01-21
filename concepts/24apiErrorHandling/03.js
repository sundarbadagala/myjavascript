import fetch from "node-fetch";

const caller = (url) => {
  return async (successcallback, errorcallback) => {
    try {
      const res = await fetch(url);
      if (res.status === 200) {
        const data = await res.json();
        successcallback({
          status: res.status,
          statusText: res.statusText,
          data: data,
        });
      } else {
        errorcallback({
          status: res.status,
          statusText: res.statusText,
          data: null,
        });
      }
    } catch (err) {
      errorcallback({
        status: 500,
        statusText: "Something went wrong",
        data: null,
      });
    }
  };
};

//----------------------------------

const api = "https://jsonplaceholder.typicode.com/users/2";
var api_500 = 'https://httpstat.us/500'
var api_404 = 'https://httpstat.us/404'

console.log('before call');
caller(api_404)(
    (res) => console.log(res),
    (err) => console.log(err)
);
console.log('after call');
