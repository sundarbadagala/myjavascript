import axios from "axios";

async function caller(url) {
  try {
    const res = await axios.get(url);
    return console.log(res.data);
  } catch (err) {
    return console.log(err.message);
  }
}

//--------------------------
const api = "https://jsonplaceholder.typicode.com/user/2";
caller(api);
