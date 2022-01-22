import {Dispatch} from "react";
import {getAuthUserData} from "./authReducer";

const initialState = {
    initialized: false,
}
export type InitialStateType = typeof initialState;
const SET_INITIALIZED = 'SET-INITIALIZED';
export type AppReducerActionTypes = ReturnType<typeof initializingSuccess>

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

export const initializingSuccess = () => ({type: SET_INITIALIZED})

export const initializeApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
        dispatch(initializingSuccess())
    })
}

export default appReducer;
