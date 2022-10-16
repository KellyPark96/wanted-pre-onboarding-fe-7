import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext from "../AuthProvider";
import SignUp from "../auth/SignUp";
import Todos from "../Todo/Todos";
import LoginForm from "../auth/LoginForm.js";
import Header from "../Header"

const AppRouter = () => {
    const { auth } = useContext(AuthContext);
    const { setAuth } = useContext(AuthContext);
    const isAuthenticated = (auth === "");
    const logout = () => setAuth(!auth.email);
    const [signUp, setSignUp] = useState(null);
    const signUpCompleted = ({ sign }) => setSignUp({ sign });
    console.log(auth);
    console.log(isAuthenticated);

    return (
        <>
            <BrowserRouter>
                <Header isAuthenticated={isAuthenticated}
                        signUpCompleted={signUpCompleted}
                        logout={logout}/>
                <Routes>
                    <Route
                        path="/"
                        element={<LoginForm isAuthenticated={isAuthenticated} />}
                    ></Route>
                    <Route
                        path="/sign-up"
                        element={<SignUp isAuthenticated={isAuthenticated} signUpCompleted={signUpCompleted}/>}
                    ></Route>
                    <Route
                        path="/todos"
                        element={<Todos/>}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;