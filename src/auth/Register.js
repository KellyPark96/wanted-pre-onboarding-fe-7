import React, { useRef, useState, useEffect } from 'react';
import axios from '../api/axios';

import useAuth from '../hooks/useAuth';
import { Link, useNavigate } from "react-router-dom";

const signup_URL = '/auth/signup';

const Signup = () => {
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
            const response = await axios.post(signup_URL,
                JSON.stringify({ email: user, password: pwd }),
                {
                    headers: { "Content-Type": "application/json" }
                }
            );
            console.log(response);
            const accessToken = response?.data?.access_token;
            setAuth({ user, pwd, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);

            if (response.data.access_token) {
                localStorage.setItem("access_token", response.data.access_token);
            }
            if (response.status === 201) {
                console.log(response);
                navigate('/todos');
            }
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                console.log(err.response);
                console.log(err.message);
                console.log(err.request);
                setErrMsg('있거나 validation에 맞지 않음');
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
                    <h1>Sign Up</h1>
                    <form className="commonForm" onSubmit={handleSubmit}>
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
                        <button>Sign Up</button>
                    </form>
                    <p>
                        Already a user?<br/>
                        <Link to="/">Login</Link>
                    </p>
                </section>
            )}
        </>
    )
}

export default Signup;