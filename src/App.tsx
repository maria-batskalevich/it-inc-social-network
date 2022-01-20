import React from "react";
import {Route} from "react-router-dom";
import s from "./App.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {LoginContainer} from "./components/Login/LoginContainer";



export function App() {
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
