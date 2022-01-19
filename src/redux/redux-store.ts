import {applyMiddleware, combineReducers, createStore} from "redux";
import {
    profileReducer,
    addPost,
    updateNewPostText, setUserProfile,
} from "./profileReducer";
import {
    dialoguesReducer,
    sendMessage,
    updateNewMessageText,
} from "./dialoguesReducer";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow,
    usersReducer
} from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'

export type ReduxRootStateType = ReturnType<typeof reduxReducer>;
export type ReduxStoreType = typeof reduxStore;

export type ActionTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof updateNewMessageText>
    | ReturnType<typeof sendMessage>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
// TYPES

export const reduxReducer = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer,
    auth: authReducer,

});

export const reduxStore = createStore(reduxReducer, applyMiddleware(thunkMiddleware));