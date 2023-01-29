import fetch from "node-fetch";

function caller(url, successcallback, errorcallback){
    fetch(url)
    .then(res => {
        if(res.status === 200){
            return res.json()
        }else{
            errorcallback({
                status : res.status,
                statusText : res.statusText,
                data:null
            })
        }
    })
    .then(data => data && successcallback({
        status : res.status,
        statusText : res.statusText,
        data: data
    }))
    .catch(err => errorcallback({
        status:500,
        statusText:'Something went wrong',
        data : null,
        add : err
    }))
}

//-------------------------------------
var url = "https://jsonplaceholder.typicode.com/users/3";
var api_500 = 'https://httpstat.us/500'
var api_404 = 'https://httpstat.us/404'

caller(url, (res)=>console.log('success', res),(error)=>console.log('fail', error)) 
