import {v1} from "uuid";
import alex from '../assets/images/users/alex.jpg'
import maria from '../assets/images/users/maria.jpg'
import natalie from '../assets/images/users/natalie.jpg'

export type dialogTypes = {
    id: string
    name: string
    avatar: string
    isYour: boolean
    lastMessage: string
}
export type messageTypes = {
    id: string
    isYou: boolean
    avatar: string
    message: string
}
export type dialogsPageTypes = {
    dialogs: Array<dialogTypes>
    messages: Array<messageTypes>
}

const initialState: dialogsPageTypes = {
    dialogs: [
        {
            id: v1(),
            name: 'Alex',
            avatar: alex ,
            isYour: false,
            lastMessage: 'I prefer espresso)'
        },
        {
            id: v1(),
            name: 'Natalie',
            avatar: natalie,
            isYour: false,
            lastMessage: "I'm visiting for the weekend))))"
        },
    ],
    messages: [
        {
            id: v1(),
            isYou: false,
            avatar: alex,
            message: 'Want a coffee?'
        },
        {
            id: v1(),
            isYou: true,
            avatar: maria,
            message: 'Latte, pls)))'
        },
        {
            id: v1(),
            isYou: false,
            avatar: alex ,
            message: 'I prefer espresso)'
        },
    ],
}

function dialogsReducer(state: dialogsPageTypes = initialState, action: DialogsActions): dialogsPageTypes {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: v1(),
                        isYou: true,
                        avatar: maria,
                        message: action.message
                    }
                ],
            }
        default:
            return state
    }
}

export type addMessageActionType = ReturnType<typeof addMessageAC>
export type DialogsActions = addMessageActionType

export const addMessageAC = (message: string) => {
    return {type: 'ADD-MESSAGE', message} as const
}

export default dialogsReducer