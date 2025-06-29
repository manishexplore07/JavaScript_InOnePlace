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


/*
fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
.then(data => console.log(data));

fetch('https://www.google.com').then(res => res.text())
.then(data => console.log(data));


async function fetchData() {
let res = await fetch('https:www.google.com');
let data = await res.text();
console.log(data);
}


async function fetchData(url) {
try {
const response = await fetch (url);
if (!response.ok) {
throw new Error('Network response was not ok + response.statusText);
};
const data = await response.json();
console.log(data);
} catch (error) {
console.log(error);
}
}
fetchData('https://jsonplaceholder.typicode.com/posts');
*/