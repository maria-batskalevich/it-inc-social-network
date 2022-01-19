import React from "react";
import {findAllByDisplayValue} from "@testing-library/react";

export const LoginForm = () => {
    return <div>
        <form>
            <div>
                <input placeholder={'Login'}/>
            </div>
            <div>
                <input placeholder={'Password'}/>
            </div>
            <div>
                <input type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    </div>

}

export const Login = (props: any) => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>

}