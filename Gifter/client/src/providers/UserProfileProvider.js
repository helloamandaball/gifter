import React, { useState } from "react";

export const UserProfileContext = React.createContext();

export const UserProfileProvider = (props) => {
    const [users, setUsers] = useState([]);

    const getAllUsers = () => {
        return fetch(`https://localhost:44325/api/userprofile`)
        .then((res) => res.json())
        .then(setUsers);
    }

    const getUser = (id) => {
        return fetch(`https://localhost:44325/api/userprofile/userposts/${id}`)
        .then((res) => res.json());
    };

    return (
        <UserProfileContext.Provider value={{ users, getAllUsers, getUser }}>
            {props.children}
        </UserProfileContext.Provider>
    );
};