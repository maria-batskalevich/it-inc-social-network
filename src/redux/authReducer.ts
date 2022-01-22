import {authAPI, ResultCode} from "../api/api";
import {Dispatch} from "react";
import {AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";

export type InitialUsersStateType = typeof initialAuthUserState;
export type AuthReducerActionTypes = ReturnType<typeof setAuthUserData>
const SET_USER_DATA = 'SET-USER-DATA';

export const setAuthUserData = (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
) =>
    ({
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth,
        },
    } as const);

export const getAuthUserData = (): AppThunkType => (dispatch: Dispatch<any>) => {
    return authAPI.me()
        .then(promise => {
            if (promise.resultCode === ResultCode.Success) {
                dispatch(
                    setAuthUserData(promise.data.id, promise.data.email,
                        promise.data.login, true)
                );
            }
        });
}

export const login = (
    email: string,
    password: string,
    rememberMe?: boolean
): AppThunkType => (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe).then(promise => {
        if (promise.resultCode === ResultCode.Success) {
            dispatch(getAuthUserData());
        } else {
            const errMessage = promise.messages.length
                ? promise.messages[0]
                : "Incorrect log in data";
            dispatch(
                stopSubmit("loginForm", {_error: errMessage})
            );
        }
    });
}

export const logout = (): AppThunkType => (dispatch: Dispatch<any>) => {
    authAPI.logout().then(promise => {
        if (promise.resultCode === ResultCode.Success) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}

const initialAuthUserState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
}

export const authReducer = (
    state: InitialUsersStateType = initialAuthUserState,
    action: AuthReducerActionTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state;
    }
};

export default authReducer;
