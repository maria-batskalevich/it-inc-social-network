
export type InitialUsersStateType = typeof initialAuthUserState;
export type AuthReducerActionTypes =
    | ReturnType<typeof setAuthUserData>
const SET_USER_DATA = 'SET-USER-DATA';

export type AuthType = {
    id: number | null;
    login: string | null;
    email: string | null;
    isAuth: boolean;
};

const initialAuthUserState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
} as AuthType;

export const authReducer = (
    state: InitialUsersStateType = initialAuthUserState,
    action: AuthReducerActionTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
               ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
};

export const setAuthUserData = (initialAuthUserState: InitialUsersStateType) => ({type: SET_USER_DATA, data: initialAuthUserState} as const);
export default authReducer;
