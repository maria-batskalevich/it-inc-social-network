import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import postsReducer from "./PostsReducer";
import statusReducer, {StatusRootActionsType} from "./statusReducer";
import authReducer from "./auth/authReducer";
import {AuthRootActionsType} from "./auth/authTypes";
import profileReducer, {DialogsActionsRootType} from "./profileReducer";
import usersReducer, {UsersRootActionsType} from "./usersReducer";
import dialoguesReducer from "./dialoguesReducer";
import rightSidebar from "./rightSidebar";

export type AppStateTypes = ReturnType<typeof rootReducer>;

export type AppActionsType =
    | UsersRootActionsType
    | AuthRootActionsType
    | DialogsActionsRootType
    | StatusRootActionsType


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    postsPage: postsReducer,
    status: statusReducer,
    rightSidebar: rightSidebar,

});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootThunkType = ThunkAction<void, AppStateTypes, unknown, AppActionsType>//Promise <-> void

// @ts-ignore
window.store = store;