import {authAPI, ResultCode, securityAPI} from "../api/API";
import {RootThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {setCurrentPage} from "./usersReducer";

type AuthInitialStateType = typeof authInitialState;
export type AuthReducerActionTypes =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setCaptchaURL>;


const authInitialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false as boolean,
    captchaURL: null as null | string,
};

export const authReducer = (
    authState = authInitialState,
    action: AuthReducerActionTypes
): AuthInitialStateType => {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
        case "SET_CAPTCHA_URL":
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

export const setCaptchaURL = (captchaURL: string | null) =>
    ({
        type: "SET_CAPTCHA_URL",
        payload: {
            captchaURL,
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
        console.warn(e);
        alert("An error has occurred. Please try again later.");
    }
}

export const login = (
    email: string,
    password: string,
    rememberMe?: boolean,
    captcha?: string,
): RootThunkType => async (dispatch) => {
    try {
        const promise = await authAPI.login(email, password, rememberMe, captcha);
        if (promise.resultCode === ResultCode.Success) {
            dispatch(getAuthUserData());
            dispatch(setCurrentPage(1));
        } else {
            if (promise.resultCode === ResultCode.Captcha) {
                dispatch(getCaptchaURL()); // dispatching thunk from another thunk
            }
            const errMessage = promise.messages.length
                ? promise.messages[0]
                : "Incorrect log in data";
            alert(errMessage)
            dispatch(
                stopSubmit("loginForm", {_error: errMessage}))
        }
    } catch (e) {
        console.warn(e);
        alert("An error has occurred. Please try again later.");
    }
};

export const logout = (): RootThunkType => async (dispatch) => {
    try {
        const promise = await authAPI.logout();
        if (promise.resultCode === ResultCode.Success) {
            dispatch(setAuthUserData(null, null, null, false));
            dispatch(setCaptchaURL(null));
            dispatch(setCurrentPage(1));
        } else {
            const errMessage = promise.messages[0];
            alert(errMessage);
            console.warn(errMessage); // handling errors by resultCode
        }
    } catch (e) {
        console.warn(e);
        alert("An error has occurred. Please try again later."); // handling errors by status code
    }
};
export const getCaptchaURL = (): RootThunkType => async (dispatch) => {
    try {
        const res = await securityAPI.getCaptcha();
        const captchaURL = res.url;
        dispatch(setCaptchaURL(captchaURL));
    } catch (e) {
        console.warn(e);
        alert("An error has occurred. Please try again later.");
    }
}