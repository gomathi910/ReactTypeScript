
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
    id: number;
    title: string;
    body: string;
  }
function Service() {
    React
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
      axios.get(' https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          setPosts(response.data);
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    }, []);
  return (
    <div>
            <h1>Service Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Service
