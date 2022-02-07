import React from "react";
import {LoginPropsType} from "./LoginContainer";
import LoginForm, {LoginFormDataType} from "./LoginForm";
import {Redirect} from "react-router-dom";

export const Login = React.memo(({ login, isAuth, captchaURL  }: LoginPropsType) => {
    const onSubmit = (formData: LoginFormDataType) =>
        login(formData.email, formData.password, formData.rememberMe);

    if (isAuth) return <Redirect to={"/profile"} />;
    else
        return (
            <div>
                <h1>Log in</h1>
                <LoginForm onSubmit={onSubmit} captchaURL={captchaURL} />
            </div>
        );
});