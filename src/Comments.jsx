import React from 'react';
import {useState, useEffect} from "react";

const Comments = () => {
    const [ comments, setComments ] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(data => setComments(data));
        }, [])
  return (
    <div>
        <h1>Foydalanuvchilar royhati:</h1>
        <hr />
        <div style={{width: "100%", display: "flex", flexWrap: "wrap"}}>
            {comments.map((comment) => (
                <div key={comment.id} style={{border: "2px solid black", borderRadius: "10px", padding: "1rem"}}>
                    <h4>{comment.name}</h4>
                    <p>{comment.name}</p>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Comments;