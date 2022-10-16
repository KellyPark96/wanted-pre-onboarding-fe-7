import React from 'react';
import { Navigate } from "react-router-dom";

const TodoRouter = ({ children }) => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken === null) {
        return <Navigate to="/"/>
    }

    return <>{children}</>;
};

export default TodoRouter;