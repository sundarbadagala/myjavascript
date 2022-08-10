import fetch from "node-fetch";

const getData = () => {
  const promise = fetch("https://jsonplaceholder.typicode.com/users");
  promise.then((res) => res.json()).then((data) => console.log(data.length));
};

const getUserDetails=()=>{
    console.log('user details')
}

const getSystemDetails=()=>{
    console.log('system details')
}

getData()
getSystemDetails()
getUserDetails()
