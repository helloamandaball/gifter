import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";

export const Register = () => {
    // Create state variables for each form field
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [imageurl, setImageurl] = useState("");
    const [password, setPassword] = useState("");

    // Import the register function from our context-- we'll use this when they click submit
    const { register } = useContext(UserProfileContext);

    const navigate = useNavigate();

    // This function will run when the user has finished filling out the form and clicks submit
    const submitLoginForm = (e) => {
        e.preventDefault();
        register({ name, email, bio, imageurl, password });
        navigate("/"); 
        window.location.reload(true);
    };

    return (
    <>
        <div className="mt-5"></div>
        <h2 className="text-center">Register</h2>
        <form className="card bg-light col-sm-8 mx-auto my-3 p-3">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <input className="form-control m-2"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <input className="form-control m-2"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <input className="form-control m-2"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="name" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <textarea className="form-control m-2"
                        type="text"
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="bio" />
                        {" "}
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <input className="form-control m-2"
                        type="text"
                        onChange={(e) => setImageurl(e.target.value)}
                        placeholder="imageurl" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3 mx-auto">
                        <button className="btn btn-primary" type="submit" onClick={submitLoginForm}>
                            Register
                        </button>
                    </div>
                </div>
                <div className="mt-2">
                    <Link to="/login" className="nav-link">
                        Return to Log In 
                    </Link>
                </div>
            </div>
        </form>
    </>
    );
};

// export default Register;