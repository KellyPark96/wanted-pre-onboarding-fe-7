import { postSignIn } from "../api/AuthApi";
import React, { useState, createContext, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../hooks/useAuth";

const LoginForm = ({ isAuthenticated, login }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const useAuth = useContext(AuthContext);
    console.log(useAuth);
    const location = useLocation();
    const navigate = useNavigate();
    const { from } = location.state || { from: { pathname: "/" } };

    if (isAuthenticated) return navigate(from);

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            postSignIn(email, password).then(response => {
                login({ email, password });
                const accessToken = response?.data?.access_token;

                if (response.data.access_token) {
                    localStorage.setItem("access_token", response.data.access_token);
                    // setAuth({ email, password, accessToken });
                }
                if (response.status === 201) {
                    console.log(response);
                }
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
                <h1>Login</h1>
                {/*<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>*/}
                <label htmlFor="username">Username:</label>
                <input type="text"
                       id="username"
                       autoComplete="off"
                       value={email}
                       placeholder="email"
                       onChange={(e) => setEmail(e.target.value)}
                    // ref={userRef}
                       required
                />
                <label htmlFor="password">Password:</label>
                <input type="password"
                       id="password"
                       value={password}
                       placeholder="password"
                       onChange={(e) => setPassword(e.target.value)}
                       required
                />
                <button type="submit">Login</button>
                <p>
                    Need an Account?<br/>
                    <button onClick={() => navigate("/sign-up")}>SignUp</button>
                </p>
            </section>
        </form>
    )
}

export default LoginForm;