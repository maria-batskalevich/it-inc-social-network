import {v1} from "uuid";

export type postTypes = {
    id: string
    likes: number
    post: string
}
export type profilePageTypes = {
    posts: Array<postTypes>
}

export type newPostTextActionType = ReturnType<typeof newPostTextAC>
export type addPostActionType = ReturnType<typeof addPostAC>

export type profileActions = newPostTextActionType | addPostActionType

const initialState = {
    posts: [
        {id: v1(), likes: 1, post: 'This is my first post'},
    ],
}

function postsReducer(state: profilePageTypes = initialState, action: profileActions): profilePageTypes {
    switch (action.type) {
        case 'NEW-POST-TEXT':
            return {
                ...state,
            }
        case 'ADD-POST':
            return {
                ...state,
                posts: [{id: v1(), likes: 0, post: action.post}, ...state.posts],
            }
        default:
            return state
    }
}

export const newPostTextAC = (newPostText: string) => {
    return {type: 'NEW-POST-TEXT', newPostText} as const
}
export const addPostAC = (post: string) => {
    return {type: 'ADD-POST', post} as const
}

export default postsReducer