import XMLHttpRequest from "xhr2";

function caller(url, props) {
  const { method = "GET" } = { ...props };
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open(method, url, true);
    request.send();
    request.onload = () => {
      if (request.status === 200) {
        resolve(JSON.parse(request.responseText));
      } else {
        reject(`error ${request.status} ${request.statusText}`);
      }
    };
  });
}
//----------------------------------------------------------------
var url = "https://jsonplaceholder.typicode.com/user/3";
var j = 'https://httpstat.us/500'

console.log('before call');
caller(j)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
console.log('after call');
