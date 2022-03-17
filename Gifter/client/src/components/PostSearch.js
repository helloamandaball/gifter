import React, { useContext, useState } from "react"
import { PostContext } from "../providers/PostProvider"

const PostSearch = () => {
    const [ searchTerm, setSearchTerm ] = useState('');
    const { searchPosts } = useContext(PostContext);

    const handleSearch = () => {
        console.log("Search button clicked!", searchTerm);
        searchPosts(searchTerm);
    };

    return (
        <div className="m-3">
            <label htmlFor="q" className="col-lg-2 col-form-label">Post search:&nbsp;</label>
            <input type="text" className="input--wide" id="q"
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search posts for... " />
            <button type="submit" className="btn btn-outline-primary btn-sm ms-2 mt-0 mb-1" onClick={handleSearch}>
                Search
            </button>
        </div>
    )
}

export default PostSearch;