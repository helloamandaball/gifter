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
        <div className="col-sm-8 mx-auto my-3">
            <label htmlFor="q" className="col-md-2 col-form-label">Post search:&nbsp;</label>
            <input type="text" className="input--wide col-md-4" id="q"
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search posts for... " />
            <button type="submit" className="btn btn-outline-primary btn-sm ms-2 mt-0 mb-1" onClick={handleSearch}>
                Search
            </button>
        </div>
    )
}

export default PostSearch;