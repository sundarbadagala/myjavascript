import fetch from "node-fetch";

const getTheData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // if (!response.ok) throw Error();
    const data = await response.json();
    console.log(data);
    console.log("You will see this last.");
  } catch (err) {
    console.error(err.message);
  }
};

getTheData();
console.log("You will see this first.");
