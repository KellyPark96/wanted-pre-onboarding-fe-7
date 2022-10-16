import React, { useContext } from 'react';
import AuthContext from "../AuthProvider";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ logout }) => {
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);
    const handleClick = () => {
        logout();
        localStorage.removeItem('access_token');
        console.log(auth);
        navigate("/");
    }
    return (
        <button onClick={handleClick}>Logout</button>
    )
}

export default LogoutButton;