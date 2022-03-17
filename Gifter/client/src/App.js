import React from "react";
import "./App.css";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import { PostProvider } from "./providers/PostProvider";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <UserProfileProvider>
        <PostProvider>
            <Header />
            <ApplicationViews />
        </PostProvider>
        </UserProfileProvider>
    </div>
  );
}

export default App;
