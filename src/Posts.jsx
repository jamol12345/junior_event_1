import React from 'react';
import {useState, useEffect} from "react";

const Posts = () => {
    const [ posts, setPosts ] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setPosts(data));
        }, [])
  return (
    <div>
        <h1>Foydalanuvchilar royhati:</h1>
        <hr />
        <div style={{width: "100%", display: "flex", flexWrap: "wrap"}}>
            {posts.map((post) => (
                <div key={post.userId} style={{border: "2px solid black", borderRadius: "10px", padding: "1rem"}}>
                    <h4>{post.id}</h4>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Posts;