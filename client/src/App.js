import React from "react";
import { Route, Routes } from "react-router-dom"
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm"

function App() {
  return (
    <div className="App">
      <PostProvider>
        <PostForm>
            <Routes>
                <Route path="posts/create/*" element={<PostForm />} />
            </Routes>
        </ PostForm>
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;
