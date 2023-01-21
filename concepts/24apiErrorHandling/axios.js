import axios from "axios";

function caller(url) {
  return axios
    .get(url)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.message));
}

//--------------------------
const api = "https://jsonplaceholder.typicode.com/user/2";
caller(api);
