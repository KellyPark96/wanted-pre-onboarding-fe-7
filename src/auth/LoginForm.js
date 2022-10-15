import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LoginForm = ({ isAuthenticated, login }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            login({ email, password });
        } catch (error) {
            alert("Failed to login");
            setEmail("");
            setPassword("");
        }
    }

    const location = useLocation();
    const navigate = useNavigate();
    const { from } = location.state || { from: { pathname: "/" } };
    if (isAuthenticated) return navigate(from);

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
                <button type="submit">Sign In</button>
                <p>Need an Account?<br/><button onClick={()=> navigate("/sign-up")}>SignUp</button></p>
            </section>
        </form>
    )
}

export default LoginForm;