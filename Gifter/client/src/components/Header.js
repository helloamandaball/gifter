import React from "react";
import { Link } from "react-router-dom";
// import { Logout } from "./Logout";

const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-info">
            <div className="row">
                <div className="col-md-12">
                    <ul className="navbar-nav mr-auto">
                        <li> 
                            <Link to="/" className="navbar-brand ms-3">
                                GiFTER
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Feed
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/posts/add" className="nav-link">
                                New Post
                            </Link>
                        </li>
                        {/* <li className="ml-auto mr-2">
                            <Logout />
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;