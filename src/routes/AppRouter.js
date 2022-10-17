import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoRouter from "../routes/TodoRouter";
import Login from "../auth/Login.js";
import SignUp from "../auth/SignUp";
import Todos from "../Todo/Todos";


const AppRouter = () => {
    return (
        <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<Login />}
                    ></Route>
                    <Route
                        path="/sign-up"
                        element={<SignUp />}
                    ></Route>
                    <Route
                        path="/todo"
                        element={
                        <TodoRouter>
                            <Todos />
                        </TodoRouter>
                    }></Route>
                </Routes>
        </Router>
    )
}

export default AppRouter;