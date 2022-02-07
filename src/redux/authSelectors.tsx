import {ReduxRootStateType} from "./redux-store";

export const selectAuthUserId = (state: ReduxRootStateType): number | null =>
    state.auth.id;
export const selectIsAuth = (state: ReduxRootStateType): boolean =>
    state.auth.isAuth;
export const selectLogin = (state: ReduxRootStateType): string | null =>
    state.auth.login;
export const selectCaptchaURL = (state: ReduxRootStateType): null | string =>
    state.auth.captchaURL;