import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Post from "./Post";

const UserPosts = () => {
    const [ user, setUser ] = useState();
    const { getUser } = useContext(UserProfileContext);
    const { id } = useParams();

    useEffect(() => {
        getUser(id)
        .then(setUser);
    }, []);

    if (!user) {
        return null;
      }

    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="cards-column">
            {user.posts.map((singlePostInLoop) => (
                <Post key={singlePostInLoop.id} postProp={singlePostInLoop} />
            ))}
            </div>
        </div>
        </div>
    );
};

export default UserPosts;