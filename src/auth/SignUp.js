import { postSignUp } from "../api/AuthApi";
import React, { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";


const SignUp = ({ isAuthenticated, signUpCompleted }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [text, setText] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const { from } = location.state || { from: { pathname: "/" } };
    if (isAuthenticated) return navigate(from);
    console.log(isAuthenticated);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            postSignUp(email, password).then(response => {
                console.log(response);
                const accessToken = response?.data?.access_token;

                if (response.data.access_token) {
                    localStorage.setItem("access_token", response.data.access_token);
                }
                if (response.status === 201) {
                    signUpCompleted(true);
                    runTasks();
                    // navigate('/todos');
                }
            });
        } catch (err) {
            alert("Failed to register");
            setEmail("");
            setPassword("");
            if (!err?.response) {
                alert('No Server Response');
            } else if (err.response?.status === 400) {
                console.log(err.response);
                console.log(err.message);
                console.log(err.request);
                alert('있거나 validation에 맞지 않음');
            } else if (err.response?.status === 401) {
                alert('Unauthorized');
            } else {
                alert('Login Failed');
            }
            // errRef.current.focus();
        }
    }

    const runTasks = async () => {
        try {
            let result = await loading(0);
            setText('[1/4]회원가입중.');
            await loading(result++);
            setText('[2/4]회원가입중..');
            await loading(result++);
            setText('[3/4]회원가입중...');
            await loading(result++);
            setText('[4/4]회원가입 완료 !');
            await loading(result++);
            // navigate("/todos");
        } catch (err) {
            console.log(err);
        }
    }

    const loading = (num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = num + 1;
                if(result > 5) {
                    const error = new Error("over loading");
                    return reject(error);
                }
                resolve(result);
            }, 500);
        });
    }

    return (
        <form className="commonForm" onSubmit={handleSubmit}>
            <section>
                <h1>Register</h1>
                <label htmlFor="username">Username:</label>
                <input type="text"
                       id="username"
                       autoComplete="off"
                       value={email}
                       placeholder="email"
                       onChange={(e) => setEmail(e.target.value)}
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
                <button type="submit">Sign Up</button>
                <p>
                    Already a user?<br/>
                    <button onClick={() => navigate("/")}>Login</button>
                </p>
                <div>{text}</div>
            </section>
        </form>
    )
}

export default SignUp;