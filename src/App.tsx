import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {getAuthUserData} from "./redux/auth/authReducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {AppStateTypes} from "./redux/store";
import {Content} from "./components/Content/Content";
import {Navbar} from "./components/Navbar/Navbar";
import {OnlineFriends} from "./components/OnlineFriends/OnlineFriends";

function App() {
    const isInitialized = useSelector<AppStateTypes, boolean>(state => state.auth.isInitialized)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getAuthUserData())
    }, [dispatch])

    if (!isInitialized) return <Preloader />

    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Content />
            <OnlineFriends />
        </div>
    );
}

export default App;