import React from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import s from "./App.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {ReduxRootStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const UsersContainer = React.lazy(
    () => import("./components/Users/UsersContainer")
);
const ProfileContainer = React.lazy(
    () => import("./components/Profile/ProfileContainer")
);
const DialoguesContainer = React.lazy(
    () => import("./components/Dialogues/DialoguesContainer")
);
const LoginContainer = React.lazy(
    () => import("./components/Login/LoginContainer")
); // lazy-loaded components

type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsType = {
    initializeApp: () => void;
};
type AppClassContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class AppClassContainer extends React.PureComponent<AppClassContainerPropsType> {
    componentDidMount() {
        initializeApp()
        window.addEventListener(
            "unhandledrejection",
            this.catchUnhandledRejections
        );
    }

    // clearing subscription on component unmount
    componentWillUnmount() {
        window.removeEventListener(
            "unhandledrejection",
            this.catchUnhandledRejections
        );
    }

    // subscribing to all unhandled promise rejections
    catchUnhandledRejections = (event: PromiseRejectionEvent) => {
        console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
    };

    render() {
        if (!this.props.initializeApp) {
            return <Preloader/>
        }
        return (
            <div className={s.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Switch>
                        <Route path={"/profile/:userId?"} render={withSuspense(ProfileContainer)}/>
                        <Route path={"/dialogues"} render={withSuspense(DialoguesContainer)}/>
                        <Route path={"/users"} render={withSuspense(UsersContainer)}/>
                        <Route path={"/login"} render={withSuspense(LoginContainer)}/>
                        <Redirect from={"/"} to={"/profile"}/>
                        <Redirect from={"*"} to={"/profile"}/>
                    </Switch>

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
