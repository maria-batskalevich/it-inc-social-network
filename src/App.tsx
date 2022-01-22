import React from "react";
import {Route, withRouter} from "react-router-dom";
import s from "./App.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {LoginContainer} from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {ReduxRootStateType} from "./redux/redux-store";

type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsType = {
    initializeApp: () => void;
};
type AppClassContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class AppClassContainer extends React.Component<AppClassContainerPropsType> {
    componentDidMount() {
        initializeApp()
    }

    render() {
        if (!this.props.initializeApp) {
            return <Preloader/>
        }
        return (
            <div className={s.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                    <Route path={"/dialogues"} render={() => <DialoguesContainer/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                    <Route path={"/login"} render={() => <LoginContainer/>}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: ReduxRootStateType) => ({
    initialized: state.app.initialized
})

export const AppContainer = compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, unknown, ReduxRootStateType>(
        mapStateToProps,
        {
            initializeApp,
        }
    ),
    withRouter
)(AppClassContainer);
