import {ReduxRootStateType} from "../../redux/redux-store";
import {Login} from "./Login";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {selectCaptchaURL} from "../../redux/authSelectors";

type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsType = {
    login: (
        email: string,
        password: string,
        rememberMe?: boolean,
        captcha?: string
    ) => void;
};
export type LoginPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: ReduxRootStateType) => ({
    isAuth: state.auth.isAuth,
    captchaURL: selectCaptchaURL(state),
});

const LoginContainer = connect<MapStatePropsType,
    MapDispatchPropsType,
    unknown,
    ReduxRootStateType>(mapStateToProps, {login})(Login);
export default LoginContainer;