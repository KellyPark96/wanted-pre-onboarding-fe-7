import React from 'react';
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem('access_token');
        navigate("/");
    }
    return (
        <button className="logoutButton" onClick={handleClick}>Logout</button>
    )
}

export default LogoutButton;