export type InitialDialoguesStateType = typeof initialDialoguesState;

const SEND_MESSAGE = "SEND-MESSAGE";

export type DialogueItemType = {
    id: number;
    personName: string;
};
export type MessageType = {
    id: number;
    messageText: string;
};

type DialoguesInitialStateType = typeof initialDialoguesState;
export type DialoguesReducerActionTypes =
    | ReturnType<typeof sendMessage>;

const initialDialoguesState = {
    dialogues: [
        {id: 1, personName: "1111"},
        {id: 2, personName: "2222"},
        {id: 3, personName: "3333"},
        {id: 4, personName: "4444"},
        {id: 5, personName: "5555"},

    ] as DialogueItemType[],
    messages: [
        {id: 1, messageText: "Hi-Hi-Hi!!!!!!"},
        {id: 2, messageText: "Go to sleep, pls)))))."},
        {id: 3, messageText: "I Love You!!)))"},
        {id: 4, messageText: "Why.....&"},
        {id: 5, messageText: "$500/month is not enough... We can do better!!!!"},

    ] as MessageType[],
};

export const dialoguesReducer = (
    state: DialoguesInitialStateType = initialDialoguesState,
    action: DialoguesReducerActionTypes
): DialoguesInitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE: {
            const updatedState = {
                ...state,
                messages: [...state.messages],
            };
            updatedState.messages.push({
                id: updatedState.messages.length + 1,
                messageText: action.payload.newMessageText,
            });
            return updatedState;
        }

        default:
            return state;
    }
}

export const sendMessage = (newMessageText: string) =>
    ({
        type: SEND_MESSAGE,
        payload: {
            newMessageText,
        },
    } as const);
