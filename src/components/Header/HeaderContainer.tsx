import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthType, setAuthUserData} from "../../redux/authReducer";
import {ReduxRootStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean,
    login: string | null,
};
type MapDispatchPropsType = {
    setAuthUserData: (data: AuthType) => void
};

type HeaderClassContainerPropsType = MapStatePropsType & MapDispatchPropsType;

export class HeaderClassContainer extends React.Component<HeaderClassContainerPropsType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(promise => {
               if(promise.data.resultCode === 0) {
                   this.props.setAuthUserData(promise.data.data)
               }
            });
    }
    render = () => {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state: ReduxRootStateType):MapStatePropsType  => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export const HeaderContainer = connect(mapStateToProps, {setAuthUserData}) (
    HeaderClassContainer);
