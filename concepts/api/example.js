import ApiHandler from "./index.js";

//--------------SETTERS--------------------
const defaultconfig = {
  mode: "cors",
  cache: "no-cache",
};
const defaultheaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
//------------------APIS--------------------
const apis = "https://fakestoreapi.com/products/1";
const getapi = "https://fakestoreapi.com/products";
const getParamsApi = "https://fakestoreapi.com/products?limit=2";
var api_500 = "https://httpstat.us/500";
var api_404 = "https://httpstat.us/403";
//---------------------HELPERS---------------------------
const reqBody = {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
};

const getParams = {
  limit: 2,
  sort: "desc",
};
//-----------------------------------------------------------

const apiHandler = ApiHandler({
  options: defaultconfig,
  headers: defaultheaders
});


async function main() {
  const value = await apiHandler.get(apis);
  console.log(value);
}

main();
