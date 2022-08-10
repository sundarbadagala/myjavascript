import fetch from "node-fetch";

const api = "https://jsonplaceholder.typicode.com/users";

const getData = () => {
  const promise = fetch(api);
  promise
    .then((res) => res.json())
    .then((res) => fetch(`${api}/${res.length}`))
    .then((res) => res.json())
    .then((res) => res.address)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
getData();
//===========================================================================================================================

const fetchData = async () => {
  try {
    const res = await fetch(api);
    const users = await res.json();
    const user = await fetch(`${api}/${users.length}`);
    const data = await user.json();
    const address = await data.address;
    console.log(address);
  } catch (err) {
    console.log(err);
  }
};
fetchData();
