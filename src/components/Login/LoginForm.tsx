import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {requiredField} from "../../utils/validators/validators";
import s from "../common/FormControls/FormControls.module.css";

export type LoginFormDataType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha?: string;
};

type LoginFormPropsType = {
    captchaURL: null | string;
};

const LoginForm: React.FC<LoginFormPropsType & InjectedFormProps<LoginFormDataType, LoginFormPropsType>> = React.memo(
    ({handleSubmit, error, captchaURL}) => {
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        component={Input}
                        name={"email"}
                        placeholder={"Email"}
                        validate={[requiredField]}
                    />
                </div>
                <div>
                    <Field
                        component={Input}
                        name={"password"}
                        type={"password"}
                        placeholder={"Password"}
                        validate={[requiredField]}
                    />
                </div>
                <div>
                    <Field component={Input} name={"rememberMe"} type={"checkbox"}/>
                    Remember me
                </div>
                {captchaURL && <img src={captchaURL} alt={"Captcha"}/>}
                {captchaURL && (
                    <div>
                        <Field
                            component={Input}
                            name={"captcha"}
                            placeholder={"Captcha"}
                            validate={[requiredField]}
                        />
                    </div>
                )}
                {error && <div className={s.formLevelError}>{error}</div>}

                <div>
                    <button>Log in</button>
                </div>
            </form>
        );
    });

export default reduxForm<LoginFormDataType, LoginFormPropsType>({
    form: "loginForm",
})(LoginForm);