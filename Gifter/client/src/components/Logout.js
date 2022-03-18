import React from "react"
import { useNavigate } from "react-router-dom"

export const Logout = () =>{
    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault()

        localStorage.clear("gifterUser")
                
        navigate("/login") 
        window.location.reload(false);
        navigate("/")
    }

    return (
        <>
            <button className="btn btn-outline-light btn-sm mt-1 mr-1 ml-auto" 
            onClick={handleLogout}>
                LOG OUT
            </button>
        </>
    )
}