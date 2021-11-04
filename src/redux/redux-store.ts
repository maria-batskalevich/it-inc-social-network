import {combineReducers, createStore} from "redux";
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
// IMPORTS

export type ReduxRootStateType = ReturnType<typeof reduxReducers>;
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

export const reduxReducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer,
    auth: authReducer,

}); // combineReducers() - Redux function which combines all reduxReducers; accepts object with STORE BRANCH: BRANCH REDUCER key-value pairs

export const reduxStore = createStore(reduxReducers); // createStore() - Redux function to create reduxStore; accepts return value of combineReducers() as its input --> createStore() creates state object, whose .reduxStore has properties set as keys inside of combineReducers() inputs
