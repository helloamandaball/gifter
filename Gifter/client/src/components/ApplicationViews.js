import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";
// import { Logout } from "./Logout";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostSearch from "./PostSearch";
import PostDetails from "./PostDetails";
import UserPosts from "./UserPosts";
import { UserProfileContext } from "../providers/UserProfileProvider";

const ApplicationViews = () => {
    const { isLoggedIn } = useContext(UserProfileContext);

    if (isLoggedIn) {
        return (
            <Routes>
                {/* <Route path="/login" element={<><Login /><Register /></>} /> */}
                <Route path="/" exact element={<><PostSearch /><PostList /></>}/>
                <Route path="/posts/add" element={<PostForm />} />
                <Route path="/posts/:id" element={<PostDetails />} />
                <Route path="/users/:id" element={<UserPosts />} />
                {/* <Route path="/" element={<Logout />} /> */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        );
    } else {
        return(
            <Routes>        
                <Route path="login" element={<Login/>} />   
                <Route path="*" element={<Navigate to="login" />} />
                <Route path="register" element={<Register/>} />
            </Routes>
        )
    }
};

export default ApplicationViews;