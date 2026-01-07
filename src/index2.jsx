fetch("https://jsonplaceholder.typicode.com/comments")
.then(res => React.json())
.then(data => console.log(data));