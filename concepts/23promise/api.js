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

caller(url, { method: "GET" })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
