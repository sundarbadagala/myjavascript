import fetch from "node-fetch";

const api_url = "https://api.spacexdata.com/v3/launches";

const getData = async (api) => {
  try {
    const res = await fetch(api);
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

const dataResponseTime = (callback) => {    //decorator
  return async (api) => {
    console.time();
    const data = await callback(api);
    console.log(data);
    console.timeEnd();
  };
};

const dataFn = dataResponseTime(getData);

dataFn(api_url);
