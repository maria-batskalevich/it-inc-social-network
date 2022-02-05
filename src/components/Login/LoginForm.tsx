import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import classes from "../common/FormControls/FormControls.module.css";

export type LoginFormDataType = {
    email: string;
    password: string;
    rememberMe: boolean;
};

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = React.memo(
    ({handleSubmit, error}) => {
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        component={Input}
                        name={"email"}
                        placeholder={"Email"}
                        validate={[required]}
                    />
                </div>
                <div>
                    <Field
                        component={Input}
                        name={"password"}
                        type={"password"}
                        placeholder={"Password"}
                        validate={[required]}
                    />
                </div>
                <div>
                    <Field component={Input} name={"rememberMe"} type={"checkbox"} />
                    Remember me
                </div>
                {error && (
                    <div className={classes.formLevelError}>{error}</div>
                )}
                <div>
                    <button>Log in</button>
                </div>
            </form>
        );
    }
);

export default reduxForm<LoginFormDataType>({ form: "loginForm" })(LoginForm);