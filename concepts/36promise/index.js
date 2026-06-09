const promise = new Promise((res, rej) => {
  rej("error");
});

promise.then((res) => console.log(res)).catch((err) => console.log(err));



// Feature - 	Promise Utility
// Multiple APIs - 	Promise.all
// Fastest API response - 	Promise.race
// Retry failed request - 	Retry utility
// Lazy loading	- async/await
// Infinite scroll -	Promise queue
// Rate limiting	- Promise pool