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

export const setInitialized = () => ({type: SET_INITIALIZED} as const)

export const initializeApp = (): RootThunkType => async (dispatch) => {
    try {
        await dispatch(getAuthUserData());
        dispatch(setInitialized());
    } catch (e) {
        console.log(e);
        alert("An error has occurred. Please try again later.");
    }
}
