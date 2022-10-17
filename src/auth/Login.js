import { postSignIn } from "../api/AuthApi";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validLogin } from "./ValidationCheck";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('access_token')) navigate('/todo');
    }, [navigate]);

    const handleDisabledLoginButton = () => validLogin(email, password);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            postSignIn(email, password).then(response => {
                console.log(response);
                const accessToken = response?.data?.access_token;
                localStorage.setItem("access_token", accessToken);
                navigate("/todo");
            });
        } catch (error) {
            alert("Failed to login");
            setEmail("");
            setPassword("");
        }
    }

    return (
        <form className="commonForm" onSubmit={handleSubmit}>
            <section>
                <p></p>
                <h1 className="title">Login</h1>
                <input type="text"
                       id="username"
                       autoComplete="off"
                       value={email}
                       placeholder="email"
                       onChange={(e) => setEmail(e.target.value)}
                       required
                />
                <input type="password"
                       id="password"
                       value={password}
                       placeholder="password"
                       onChange={(e) => setPassword(e.target.value)}
                       required
                />
                <button type="submit"
                        className="submitButton"
                        disabled={handleDisabledLoginButton()}
                >Login
                </button>
                <p className="changeMessage">
                    Need an Account?<br/>
                    <button className="changeButton" onClick={() => navigate("/sign-up")}>SignUp</button>
                </p>
            </section>
        </form>
    )
}

export default Login;