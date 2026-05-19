import XMLHttpRequest from "xhr2";

function caller(url, props) {
  const { method = "GET" } = { ...props };
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open(method, url, true);
    request.send();
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        const res = {
          status: request.status,
          statusText: request.statusText,
          data: JSON.parse(request.responseText),
        };
        resolve(res);
      } else {
        const res = {
          status: request.status,
          statusText: request.statusText,
          data: JSON.parse(request.responseText),
        };
        reject(res);
      }
    };
  });
}
//----------------------------------------------------------------
var url = "https://fakestoreapi.com/products";
var j = "https://httpstat.us/500";

console.log("before call");
caller(url)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
console.log("after call");
