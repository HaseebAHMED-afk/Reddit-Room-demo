import React, { useState,useEffect } from "react";
import axios from 'axios';

function Reddit() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
      axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res=>{
          const newPosts = res.data.data.children
          .map(obj=>obj.data);

          setPosts(newPosts);
      });
  }, []);
  return (
    <div>
      <h1>Reddit/reactJS/</h1>
      <ul>
          {posts.map(post =>(
              <div><li key={post.id}>{post.title}</li>
              <p>{post.author_fullname}</p>
              <p>{post.score}</p>
              <p>Original Post: {post.url}</p>
              <p>Description:{post.selftext} </p>
              </div>
          ))}
      </ul>
    </div>
  );
}

export default Reddit;
