import { postSignUp } from "../api/AuthApi";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { validAuth } from "./ValidationCheck";
import { AuthForm, AuthSection } from "./AuthStyle";
import { AuthInput, AuthTitle, AuthTypeChangeMessage } from "../components/auth/AuthContentsStyle";
import SubmitButton from "../components/auth/SubmitButton";
import ChangeButton from "../components/auth/ChangeButton";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleDisabledButton = () => validAuth(email, password);

    const [text, setText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            postSignUp(email, password).then(response => {
                console.log(response);
                if (response.data.access_token) {
                    localStorage.setItem("access_token", response.data.access_token);
                }
                if (response.status === 201) {
                    runTasks();
                    navigate('/todo');
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
        } catch (err) {
            console.log(err);
        }
    }

    const loading = (num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = num + 1;
                if (result > 5) {
                    const error = new Error("over loading");
                    return reject(error);
                }
                resolve(result);
            }, 500);
        });
    }

    return (
        <AuthForm onSubmit={handleSubmit}>
            <AuthSection>
                <AuthTitle>Register</AuthTitle>
                <AuthInput type="text"
                       id="username"
                       autoComplete="off"
                       value={email}
                       placeholder="email"
                       onChange={(e) => setEmail(e.target.value)}
                       required
                />
                <AuthInput type="password"
                       id="password"
                       value={password}
                       placeholder="password"
                       onChange={(e) => setPassword(e.target.value)}
                       required
                />
                <SubmitButton authType={"SignUp"} handleDisabledButton={handleDisabledButton} />
                <AuthTypeChangeMessage>
                    Already a user?<br/>
                    <ChangeButton changeType={"Login"} onClick={() => navigate("/")} />
                </AuthTypeChangeMessage>
            </AuthSection>
        </AuthForm>
    )
}

export default SignUp;