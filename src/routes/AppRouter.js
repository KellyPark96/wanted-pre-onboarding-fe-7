import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../auth/Login";
import Home from "../Home";
import SignUp from "../auth/SignUp";
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

    const LogoutButton = () => {
        return (<button>LogOut</button>)
    }
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route
                        path="/todos"
                        element={<Todos login={login}/>}
                    ></Route>
                    <Route
                        path="/login"
                        element={<LoginForm isAuthenticated={isAuthenticated} login={login}/>}
                    ></Route>
                    {/*<Route*/}
                    {/*    path="/sign-up"*/}
                    {/*    element={<LoginForm signUpCompleted={signUpCompleted}/>}*/}
                    {/*></Route>*/}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;