import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    return fetch("https://localhost:44325/api/post")
      .then((res) => res.json())
      .then(setPosts);
  };

  const getPost = (id) => {
    return fetch(`https://localhost:44325/api/post/${id}`)
        .then((res) => res.json());
  };  

  const addPost = (post) => {
    return fetch("https://localhost:44325/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(getAllPosts);
  };

  const searchPosts = (q) => {
    return fetch(`https://localhost:44325/api/post/search?q=${q}&sortDesc=true`)
    .then((res) => res.json())
    .then(setPosts);
  };

  return (
    <PostContext.Provider value={{ posts, getAllPosts, getPost, addPost, searchPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};