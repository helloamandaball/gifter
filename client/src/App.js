import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import PostSearch from "./components/PostSearch"
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <Routes>
            <Route path="/" exact element={<><PostSearch /><PostForm /><PostList /></>}/>
        </Routes>
      </PostProvider>
    </div>
  );
}

export default App;
