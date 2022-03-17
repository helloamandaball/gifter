import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { PostContext } from "../providers/PostProvider"
import Post from "./Post";

export const PostForm = () => {
    const { addPost, getAllPosts } = useContext(PostContext)

    const [post, setPosts] = useState({
        title: "",
        imageUrl: "",
        userProfileId: +localStorage.activeUser
      });

    const navigate = useNavigate();

    useEffect(() => {
        getAllPosts()
      }, [])

    const handleControlledInputChange = (event) => {
        const newPost = { ...post }
        newPost[event.target.id] = event.target.value
        setPosts(newPost)
    }

    const handleSavePost = (event) => {
        event.preventDefault()
        addPost(post)
        .then(() => navigate("/"));
    }

    return (
      <div className="mx-4">
        <div className="col-md-10 mx-auto">
            <form className="card bg-light col-sm-12 mx-auto pt-3 pr-3">
                <div className="form-group row col-md-12 mx-auto mb-3">
                    <label htmlFor="title" className="col-lg-2 col-form-label text-left">Post Title:</label>
                    <div className="col-lg-10">
                        <input type="text" className="form-control" id="title" placeholder="Enter post title here..."
                        onChange={handleControlledInputChange}
                        value={Post.title}/>
                    </div>
                </div>
                <div className="form-group row col-md-12 mx-auto mb-3">
                    <label htmlFor="imageUrl" className="col-lg-2 col-form-label text-left">Image URL:</label>
                    <div className="col-lg-10">
                        <input type="url" className="form-control" id="imageUrl" placeholder="Enter image url here..."
                        onChange={handleControlledInputChange}
                        value={Post.ImageUrl}/>
                    </div>
                </div>
                <div className="form-group row col-md-12 mx-auto mb-3">
                    <label htmlFor="caption" className="col-lg-2 col-form-label text-left">Caption:</label>
                    <div className="col-lg-10">
                        <textarea type="textarea" className="form-control" id="caption" placeholder="Enter caption here..."
                        onChange={handleControlledInputChange}
                        value={Post.Caption}/>
                    </div>
                </div>
                <div className="form-group row col-sm-12 mx-auto mb-3">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary" onClick={handleSavePost}>
                            Save Post
                        </button>
                    </div>
                </div>
            </form>
        </div>
      </div>  
    )
}

export default PostForm;