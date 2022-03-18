import React, { useState } from "react";

export const UserProfileContext = React.createContext();

export const UserProfileProvider = (props) => {
    const [users, setUsers] = useState([]);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const getCurrentUser = () => {
        const currentUser = localStorage.getItem("gifterUser");
        return currentUser;
    };

    const getAllUsers = () => {
        return fetch(`https://localhost:44325/api/userprofile`)
        .then((res) => res.json())
        .then(setUsers);
    }

    const getUser = (id) => {
        return fetch(`https://localhost:44325/api/userprofile/userposts/${id}`)
        .then((res) => res.json());
    };

    const login = (userObject) => {
        debugger;
        fetch(`https://localhost:44325/api/userprofile/getbyemail?email=${userObject.email}`)
        .then((r) => r.json())
        .then((userObjFromDB) => {
            localStorage.setItem("gifterUser", JSON.stringify(userObjFromDB));
            if (userObjFromDB.status !== 404) 
            {
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
                alert("Email not found. Please enter a valid email. Or register a new account.")
            }
            console.log(userObjFromDB)
        })
    };

    const register = (userObject) => {
        fetch("https://localhost:44325/api/userprofile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userObject),
        })
        .then((response) => response.json())
        .then((userObject) => {
            localStorage.setItem("gifterUser", JSON.stringify(userObject));
            alert("Your egistration was successful! Please log in.")
        });
    };

    const logout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
    };

    return (
        <UserProfileContext.Provider value={{ users, isLoggedIn, getAllUsers, getUser, getCurrentUser, login, register, logout }}>
            {props.children}
        </UserProfileContext.Provider>
    );
};