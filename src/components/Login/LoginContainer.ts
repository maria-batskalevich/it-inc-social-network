import {ReduxRootStateType} from "../../redux/redux-store";
import {Login} from "./Login";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";

type MapStatePropsType = {
    isAuth: boolean;
};
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe?: boolean) => void;
};
export type LoginPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: ReduxRootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
});

const LoginContainer = connect<MapStatePropsType,
    MapDispatchPropsType,
    unknown,
    ReduxRootStateType>(mapStateToProps, {login})(Login);
export default LoginContainer;