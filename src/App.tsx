import React from "react";
import s from './App.module.css'
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogues} from "./components/Dialogues/Dialogues";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {RootStateType, state} from "./redux/state";


export type AppPropsType = {
    state: RootStateType;
    addPost: (postText: string) => void;
}


export const App = (props: AppPropsType) => {


    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <NavBar/>
                <div className={s.appWrapperContent}>
                    <Route path={'/profile'}
                           render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route path={'/dialogues'} render={() => <Dialogues state={props.state.dialoguesPage}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>

            </div>
        </BrowserRouter>

    )
}
