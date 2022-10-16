import { postSignIn } from "../api/AuthApi";
import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../AuthProvider";
import { getTodos } from "../api/TodoApi";

const LoginForm = ({ isAuthenticated }) => {
    const { setAuth } = useContext(AuthContext);
    const { auth } = useContext(AuthContext);
    console.log(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const { from } = location.state || { from: { pathname: "/" } };
    if (isAuthenticated) return navigate(from);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            postSignIn(email, password).then(response => {
                console.log(response);
                const accessToken = response?.data?.access_token;

                if (response.data.access_token) {
                    localStorage.setItem("access_token", response.data.access_token);
                    setAuth({email, accessToken});
                    isAuthenticated = true;
                    console.log(isAuthenticated);
                    navigate("/");
                }
                if (response.status === 200) {
                    console.log(response);
                }
            });
        } catch (error) {
            alert("Failed to login");
            setEmail("");
            setPassword("");
        }
    }
    console.log(isAuthenticated);

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
                    // ref={userRef}
                       required
                />
                <input type="password"
                       id="password"
                       value={password}
                       placeholder="password"
                       onChange={(e) => setPassword(e.target.value)}
                       required
                />
                <button type="submit" className="submitButton">Login</button>
                <p className="changeMessage">
                    Need an Account?<br/>
                    <button className="changeButton" onClick={() => navigate("/sign-up")}>SignUp</button>
                </p>
            </section>
        </form>
    )
}

export default LoginForm;