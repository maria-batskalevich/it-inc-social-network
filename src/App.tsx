import React from "react";
import {Route} from "react-router-dom";
import s from "./App.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import {DialoguesContainer} from "./components/Dialogues/DialoguesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


export function App() {
    return (
        <div className={s.appWrapper}>
            <HeaderContainer/>
            <Navbar/>
            <div className={s.appWrapperContent}>
                <Route path={"/profile/:userID?"} render={() => <ProfileContainer/>}/>
                <Route path={"/dialogues"} render={() => <DialoguesContainer/>}/>
                <Route path={"/users"} render={() => <UsersContainer/>}/>
                <Route path={"/login"} render={() => <Login/>}/>

            </div>
        </div>
    );
}
