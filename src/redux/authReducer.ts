import {authAPI, ResultCode} from "../api/api";
import {RootThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";

// export type InitialUsersStateType = typeof initialAuthUserState;
export type AuthReducerActionTypes = ReturnType<typeof setAuthUserData>
type AuthInitialStateType = typeof authInitialState;


const authInitialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false as boolean,
};

export const authReducer = (
    authState = authInitialState,
    action: AuthReducerActionTypes
): AuthInitialStateType => {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            return {...authState, ...action.payload};

        default:
            return authState;
    }
};

export const setAuthUserData = (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
) =>
    ({
        type: 'SET_AUTH_USER_DATA',
        payload: {
            id,
            email,
            login,
            isAuth,
        },
    } as const);

export const getAuthUserData = (): RootThunkType => async (dispatch) => {
    try {
        const promise = await authAPI.me();
        if (promise.resultCode === ResultCode.Success) {
            const {id, email, login} = promise.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    } catch (e) {
        console.log(e);
        alert("An error has occurred. Please try again later.");
    }
}

export const login = (
    email: string,
    password: string,
    rememberMe?: boolean
): RootThunkType => async (dispatch) => {
    try {
        const promise = await authAPI.login(email, password, rememberMe);
        if (promise.resultCode === ResultCode.Success) {
            dispatch(getAuthUserData());
        } else {
            alert("Incorrect email or password.");
            const errMessage = promise.messages.length
                ? promise.messages[0]
                : "Incorrect log in data";
            dispatch(
                stopSubmit("loginForm", {_error: errMessage}))
        }
    } catch (e) {
        console.log(e);
        alert("An error has occurred. Please try again later.");
    }
};

export const logout = (): RootThunkType => async (dispatch) => {
    try {
        const promise = await authAPI.logout();
        if (promise.resultCode === ResultCode.Success) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    } catch (e) {
        console.log(e);
        alert("An error has occurred. Please try again later.");
    }
}