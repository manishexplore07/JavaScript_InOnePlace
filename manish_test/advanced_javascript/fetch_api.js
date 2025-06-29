/*fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
if (!response.ok) {
throw new Error('Network response was not ok + response.statusText);
}
return response.json();
})
.then(data => console.log(data))
.catch(error => console.log(error));
The Fetch API provides a modern way to make HTTP
requests in JavaScript.
It is a promise-based API, making it easier to handle
asynchronous requests.*/



fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
.then(data => console.log(data));