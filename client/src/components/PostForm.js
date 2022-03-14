import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PostContext } from "../providers/PostProvider"
import Post from "./Post";

export const PostForm = () => {
    const { addPost, getAllPosts } = useContext(PostContext)

    const [posts, setPosts] = useState({
        title: "",
        imageUrl: "",
        dateCreated: "",
        userId: +localStorage.activeUser
      });

    const navigate = useNavigate();

    useEffect(() => {
        getAllPosts()
      }, [])

    const handleControlledInputChange = (event) => {
        const newPost = { ...posts }
        newPost[event.target.id] = event.target.value
        setPosts(newPost)
    }

    const handleSavePost = (event) => {
        event.preventDefault()
        addPost(posts)
        .then(() => navigate("api/Post"))
    }

    return (
      <>
        <div className="col-md-10 mx-auto">
            <form className="card col-sm-12 mx-auto pt-3 pr-3">
                <div className="form-group row col-md-12 mx-auto mb-3">
                    <label htmlFor="post-title" className="col-sm-2 col-form-label text-left">Post Title:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="post-title" placeholder="Enter post title here..."
                        onChange={handleControlledInputChange}
                        value={Post.title}/>
                    </div>
                </div>
                <div className="form-group row col-md-12 mx-auto mb-3">
                    <label htmlFor="image-url" className="col-sm-2 col-form-label text-left">Image URL:</label>
                    <div className="col-sm-10">
                        <input type="url" className="form-control" id="image-url" placeholder="Enter image url here..."
                        onChange={handleControlledInputChange}
                        value={Post.ImageUrl}/>
                    </div>
                </div>
                <div className="form-group row col-md-12 mx-auto mb-3">
                    <label htmlFor="post-caption" className="col-sm-2 col-form-label text-left">Caption:</label>
                    <div className="col-sm-10">
                        <textarea type="textarea" className="form-control" id="post-caption" placeholder="Enter caption here..."
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
      </>
    )
}

export default PostForm;