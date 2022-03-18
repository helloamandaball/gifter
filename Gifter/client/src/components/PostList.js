import React, { useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";

const PostList = () => {
    const { posts, getAllPosts } = useContext(PostContext);
    const user = JSON.parse(localStorage.getItem("gifterUser"))

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column col-md-6">
                    {posts.filter(p => p.userProfileId === user.id).map((singlePostInLoop) => (
                        <Post key={singlePostInLoop.id} postProp={singlePostInLoop} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostList;