import { postSignIn } from "../api/AuthApi";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { validAuth } from "./ValidationCheck";
import { AuthForm, AuthSection } from "./AuthStyle";
import { AuthInput, AuthTitle, AuthTypeChangeMessage } from "../components/auth/AuthContentsStyle";
import SubmitButton from "../components/auth/SubmitButton";
import ChangeButton from "../components/auth/ChangeButton";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('access_token')) navigate('/todo');
    }, [navigate]);

    const handleDisabledButton = () => validAuth(email, password);

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
        <AuthForm onSubmit={ handleSubmit }>
            <AuthSection>
                <AuthTitle>Login</AuthTitle>
                <AuthInput type="text"
                           id="username"
                           autoComplete="off"
                           value={ email }
                           placeholder="email"
                           onChange={ (e) => setEmail(e.target.value) }
                           required />
                <AuthInput type="password"
                           id="password"
                           value={ password }
                           placeholder="password"
                           onChange={ (e) => setPassword(e.target.value) }
                           required />
                <SubmitButton authType={"Login"} handleDisabledButton={handleDisabledButton} />
                <AuthTypeChangeMessage>
                    Need an Account?<br/>
                    <ChangeButton changeType={"SignUp"} onClick={() => navigate("/sign-up")} />
                </AuthTypeChangeMessage>
            </AuthSection>
        </AuthForm>
    )
}

export default Login;