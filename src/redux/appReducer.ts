import {getAuthUserData} from "./authReducer";
import {RootThunkType} from "./redux-store";

const initialState = {
    initialized: false,
}
export type InitialStateType = typeof initialState;
const SET_INITIALIZED = 'SET-INITIALIZED';
export type AppReducerActionTypes = ReturnType<typeof setInitialized>

export const appReducer = (
    state: InitialStateType = initialState,
    action: AppReducerActionTypes) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
};

export const setInitialized = (isInitialized: boolean) =>
    ({
        type: SET_INITIALIZED,
        payload: {
            isInitialized,
        },
    } as const);

export const initializeApp = (): RootThunkType => async (dispatch) => {
    try {
        await dispatch(getAuthUserData());
        dispatch(setInitialized(true));
    } catch (e) {
        console.warn(e);
    }
}
