import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {ReduxRootStateType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/authReducer";


type MapStatePropsType = {
    isAuth: boolean,
    login: string | null,
};
type MapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
};

type HeaderClassContainerPropsType = MapStatePropsType & MapDispatchPropsType;

export class HeaderClassContainer extends React.Component<HeaderClassContainerPropsType> {
    componentDidMount() {
   this.props.getAuthUserData()
    }

    render = () => {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: ReduxRootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export const HeaderContainer = connect<
    MapStatePropsType,
    MapDispatchPropsType,
    unknown,
    ReduxRootStateType
    >(mapStateToProps, {
    getAuthUserData,
    logout,
})(HeaderClassContainer);
