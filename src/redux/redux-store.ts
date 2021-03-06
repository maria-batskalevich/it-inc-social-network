import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {
    profileReducer, ProfileReducerActionTypes,
} from "./profileReducer";
import {
    dialoguesReducer, DialoguesReducerActionTypes,
} from "./dialoguesReducer";
import {
    usersReducer, UsersReducerActionTypes
} from "./usersReducer";
import {authReducer, AuthReducerActionTypes} from "./authReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {FormAction, reducer as formReducer} from 'redux-form'
import {appReducer} from "./appReducer";
import thunk from "redux-thunk";

export type ReduxRootStateType = ReturnType<typeof reduxReducer>;
export type ReduxStoreType = typeof reduxStore;

export type AppActionTypes =
    | UsersReducerActionTypes
    | AuthReducerActionTypes
    | ProfileReducerActionTypes
    | DialoguesReducerActionTypes
    | FormAction

export type RootThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    ReduxRootStateType,
    unknown,
    AppActionTypes>;

export const reduxReducer = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,

});

export const reduxStore = createStore(reduxReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    reduxReducer,
    composeEnhancers(applyMiddleware(thunk))
);

// @ts-ignore
window.store = store;