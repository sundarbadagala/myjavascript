import fetch from "node-fetch";

var url = "https://jsonplaceholder.typicode.com/user/3";
var url_500 = 'https://httpstat.us/500'

function caller(){
    fetch(url_500)
    .then(res => res.json())
    .then( data => console.log(data))
    .catch(err => console.log(err))
}

caller()