import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../auth/Login";
import Home from "../Home";
import Register from "../auth/Register";
import Todos from "../Todo/Todos";
import LoginForm from "../auth/LoginForm.js";
import Header from "../Header"
import { SignIn } from "../auth/Auth";

const AppRouter = () => {
    const [user, setUser] = useState(null);

    const isAuthenticated = (user != null);

    const login = ({ email, password }) => setUser(SignIn({ email, password }));
    const logout = () => setUser(null);
    const [signUp, setSignUp] = useState(null);
    const signUpCompleted = ({ sign }) => setSignUp({ sign });

    return (
        <>
            <BrowserRouter>
                <Header isAuthenticated={isAuthenticated}
                        signUpCompleted={signUpCompleted}
                        logout={logout}/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route
                        path="/todos"
                        element={<Todos />}
                    ></Route>
                    <Route
                        path="/login"
                        element={<LoginForm isAuthenticated={isAuthenticated} login={login}/>}
                    ></Route>
                    <Route
                        path="/sign-up"
                        element={<Register isAuthenticated={isAuthenticated} signUpCompleted={signUpCompleted}/>}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;