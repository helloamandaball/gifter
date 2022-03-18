import React, { useContext, useEffect, useState } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(UserProfileContext);

    // const navigate = useNavigate();

    const submitLoginForm = (e) => {
        e.preventDefault();
        login({ email, password });
        // navigate("/"); 
        // window.location.reload(true);
    };

    return (
    <>
        <>
            <div className="mt-5"></div>
            <h2 className="text-center">Log In</h2>
            <form className="card bg-light col-sm-8 mx-auto my-3 p-3">
                <div className="col-sm-12 mx-auto">
                    <div className="col-sm-10 mx-auto">
                        <div className="col">
                            <input className="form-control m-2"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            placeholder="email" />
                            <input className="form-control m-2"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            placeholder="password" />
                            <div className="row">
                                <div className="col-md-2">
                                    <button className="btn btn-primary mb-1" type="submit" onClick={submitLoginForm}>
                                        Log In
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                <Link to="/register" className="nav-link">
                                    Register Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    </>
    );
};

// export default Login;