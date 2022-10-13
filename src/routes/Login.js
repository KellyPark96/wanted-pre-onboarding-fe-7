import React, {useRef, useState, useEffect} from 'react';
import axios from '../api/axios';

import useAuth from '../hooks/useAuth';
import {Link, useNavigate} from "react-router-dom";
const login_URL = '/auth/signin';

const Login = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuth();
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(login_URL,
                JSON.stringify({ email: user, password: pwd }),
                {
                    headers: { "Content-Type": "application/json" }
                }
            );
            const accessToken = response?.data?.access_token;
            setAuth({user, pwd, accessToken});
            setUser('');
            setPwd('');
            setSuccess(true);

            if (response.data.access_token) {
                localStorage.setItem("access_token", response.data.access_token);
            }
            if (response.status === 200) {
                console.log(response);
                navigate('/todos');
            }
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {!success && (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br/>
                        <Link to="/sign-up">Sign Up</Link>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login