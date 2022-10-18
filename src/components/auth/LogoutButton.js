import React from 'react';
import { useNavigate } from "react-router-dom";
import { AuthLogoutButton } from "./AuthContentsStyle"

const LogoutButton = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem('access_token');
        navigate("/");
    }
    return (
        <AuthLogoutButton onClick={handleClick}>Logout</AuthLogoutButton>
    )
}

export default LogoutButton;