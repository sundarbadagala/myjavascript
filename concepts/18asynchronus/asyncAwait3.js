import fetch from "node-fetch";

const getData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log('data',data.length);
  } catch (e) {
    console.log(e.message);
  }
};


const getSystemDetails=()=>{
    console.log('system details')
}

const getuserDetails=()=>{
    console.log('user details')
}

const getWeatherDetails=()=>{
    console.log('wether details')
}

getSystemDetails()
getData()
getuserDetails()
getWeatherDetails()