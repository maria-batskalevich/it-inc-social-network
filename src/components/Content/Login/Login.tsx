import React from "react";
import s from './Login.module.css'
import {SubmitHandler, useForm} from "react-hook-form";
import {loginMe, setResponseError} from "../../../redux/auth/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateTypes} from "../../../redux/store";
import {Redirect} from "react-router-dom";
import {AuthInitialStateTypes} from "../../../redux/auth/authTypes";

interface IFormInput {
    userName: string;
    password: string;
    rememberMe: boolean
}

export const Login = () => {
    const dispatch = useDispatch()

    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>({
        defaultValues: {
            userName: process.env.REACT_APP_EMAIL,
            password: process.env.REACT_APP_PASSWORD,
            rememberMe: true,
        },
    });

    const isResponseError = useSelector<AppStateTypes, null | string>(state => state.auth.isResponseError)
    const auth = useSelector<AppStateTypes, AuthInitialStateTypes>(state => state.auth)

    const onSubmit: SubmitHandler<IFormInput> = data => {
        dispatch(loginMe(data.userName, data.password, data.rememberMe, false))
    };

    const changeInput = () => {
        if (isResponseError) dispatch(setResponseError(null))
    }

    if (auth.isAuth) {
        return <Redirect to={`/profile/${auth.id}`}/>
    }

    return (
        <div className={s.wrapper + ' themeBorder themeBorderPad'}>
            <h2>Sign In</h2>
            <div className={s.span}>
                <span>Username: free@samuraijs.com <br/> Password: free</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <p className={s.inputWrapper}>
                    <label className={s.label}>
                        <span className={s.labelText}>Username</span>
                        {errors.userName && <span className={s.error}>Username is required</span>}
                        <input {...register("userName", {required: true})}
                               type="text"
                               onChange={changeInput}
                               className={s.name}/>
                    </label>
                </p>
                <p className={s.inputWrapper}>
                    <label className={s.label}>
                        <span className={s.labelText}>Password</span>
                        {errors.password &&
                        <span className={s.error}>Password is required. Should contain minimum 4 symbols.</span>}
                        <input {...register("password", {required: true, minLength: 3})}
                               type="password"
                               onChange={changeInput}
                               className={s.password}/>
                    </label>
                </p>
                <p className={s.inputWrapper}>
                    <label className={s.label}>
                        <input {...register("rememberMe")}
                               type="checkbox"
                               checked={true}
                               className={s.rememberMe}/>
                        <span className={s.checkboxText}>remember me?</span>
                    </label>
                </p>
                {isResponseError && <p
                    style={{
                        color: 'red',
                        fontSize: '12px',
                        marginBottom: '10px',
                        fontWeight: 'bold',
                        padding: '3px',
                        border: '1px solid red'
                    }}>{isResponseError}</p>}
                <button className={s.submit}>Sign In</button>
            </form>
        </div>
    )
}